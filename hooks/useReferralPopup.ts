import { useState, useEffect, useCallback } from "react";

interface UseReferralPopupProps {
  delay?: number;
  cooldownDays?: number;
  sessionOnly?: boolean;
  enableExitIntent?: boolean;
}

interface PopupState {
  isVisible: boolean;
  isClosing: boolean;
  shouldShow: boolean;
  popupType: "welcome" | "exit-intent" | null;
}

export const useReferralPopup = ({
  delay = 3000,
  cooldownDays = 7,
  sessionOnly = false,
  enableExitIntent = true,
}: UseReferralPopupProps = {}) => {
  const [state, setState] = useState<PopupState>({
    isVisible: false,
    isClosing: false,
    shouldShow: false,
    popupType: null,
  });

  // Track if welcome popup was shown
  const [welcomeShown, setWelcomeShown] = useState(false);
  const [exitIntentTriggered, setExitIntentTriggered] = useState(false);

  // Check if popup should be shown
  const checkShouldShow = useCallback(
    (type: "welcome" | "exit-intent" = "welcome") => {
      if (typeof window === "undefined") return false;

      const hasConverted = localStorage.getItem("hasReferredUser");
      if (hasConverted) return false;

      if (type === "exit-intent") {
        // For exit intent, only show if welcome wasn't converted and not shown recently
        const exitIntentLastShown = localStorage.getItem(
          "exitIntentPopupLastShown"
        );
        if (exitIntentLastShown) {
          const daysSinceShown =
            (Date.now() - parseInt(exitIntentLastShown)) /
            (1000 * 60 * 60 * 24);
          if (daysSinceShown < 1) return false; // Don't show exit intent more than once per day
        }
        return true;
      }

      // Welcome popup logic (existing)
      if (sessionOnly) {
        return !sessionStorage.getItem("referralPopupShown");
      } else {
        const lastShown = localStorage.getItem("referralPopupLastShown");
        if (!lastShown) return true;

        const daysSinceShown =
          (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
        return daysSinceShown >= cooldownDays;
      }
    },
    [cooldownDays, sessionOnly]
  );

  // Show popup
  const showPopup = useCallback(
    (type: "welcome" | "exit-intent" = "welcome") => {
      setState((prev) => ({
        ...prev,
        isVisible: true,
        shouldShow: true,
        popupType: type,
      }));

      // Mark as shown
      const timestamp = Date.now().toString();
      if (type === "exit-intent") {
        localStorage.setItem("exitIntentPopupLastShown", timestamp);
        setExitIntentTriggered(true);
      } else {
        if (sessionOnly) {
          sessionStorage.setItem("referralPopupShown", timestamp);
        } else {
          localStorage.setItem("referralPopupLastShown", timestamp);
        }
        setWelcomeShown(true);
      }

      // Analytics tracking
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "popup_shown", {
          event_category: "referral",
          event_label: `${type}_popup`,
          popup_type: type,
          value: 1,
        });
      }
    },
    [sessionOnly]
  );

  // Close popup with animation
  const closePopup = useCallback(
    (reason: "close" | "claim" | "maybe_later" = "close") => {
      setState((prev) => ({ ...prev, isClosing: true }));

      // Track close reason with popup type
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "popup_closed", {
          event_category: "referral",
          event_label: `${state.popupType}_${reason}`,
          popup_type: state.popupType,
          close_reason: reason,
          value: 1,
        });
      }

      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          isVisible: false,
          isClosing: false,
          shouldShow: false,
          popupType: null,
        }));
      }, 300);
    },
    [state.popupType]
  );

  // Handle claim action
  const handleClaim = useCallback(
    (referralLink: string) => {
      const popupType = state.popupType || "welcome";

      // Track conversion intent with popup type
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "referral_click", {
          event_category: "conversion",
          event_label: `${popupType}_claim`,
          popup_type: popupType,
          value: 5000,
        });
      }

      // Open referral link
      window.open(referralLink, "_blank");
      closePopup("claim");
    },
    [closePopup, state.popupType]
  );

  // Mark user as converted
  const markAsConverted = useCallback(() => {
    localStorage.setItem("hasReferredUser", "true");

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        event_category: "referral",
        event_label: "signup_completed",
        value: 5000,
      });
    }
  }, []);

  // Initialize welcome popup
  useEffect(() => {
    if (!checkShouldShow("welcome")) return;

    const timer = setTimeout(() => {
      showPopup("welcome");
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, checkShouldShow, showPopup]);

  // Exit intent detection
  useEffect(() => {
    if (!enableExitIntent || typeof window === "undefined") return;
    if (state.isVisible || exitIntentTriggered) return;

    let exitIntentShown = false;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger on upward mouse movement (leaving through top)
      if (
        e.clientY <= 0 &&
        !exitIntentShown &&
        checkShouldShow("exit-intent")
      ) {
        exitIntentShown = true;

        // Small delay to avoid accidental triggers
        setTimeout(() => {
          showPopup("exit-intent");
        }, 100);
      }
    };

    // Also detect when user tries to close tab/navigate away
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!exitIntentShown && checkShouldShow("exit-intent")) {
        exitIntentShown = true;
        showPopup("exit-intent");

        // Optional: Add a delay to show popup before page unloads
        e.preventDefault();
        e.returnValue = "";
        return "";
      }
    };

    // Detect rapid scroll to top (another exit intent signal)
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (
        currentScrollY === 0 &&
        lastScrollY > 100 &&
        !exitIntentShown &&
        checkShouldShow("exit-intent")
      ) {
        exitIntentShown = true;
        setTimeout(() => {
          showPopup("exit-intent");
        }, 500);
      }
      lastScrollY = currentScrollY;
    };

    // Only add exit intent on desktop (mobile has different behavior)
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (!isMobile) {
      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("beforeunload", handleBeforeUnload);
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("beforeunload", handleBeforeUnload);
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      // Mobile-specific exit intent: detect back button or app switch
      let isHidden = false;

      const handleVisibilityChange = () => {
        if (
          document.hidden &&
          !isHidden &&
          !exitIntentShown &&
          checkShouldShow("exit-intent")
        ) {
          isHidden = true;
          exitIntentShown = true;
          showPopup("exit-intent");
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () =>
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
    }
  }, [
    enableExitIntent,
    checkShouldShow,
    showPopup,
    state.isVisible,
    exitIntentTriggered,
  ]);

  return {
    ...state,
    welcomeShown,
    exitIntentTriggered,
    showPopup,
    closePopup,
    handleClaim,
    markAsConverted,
  };
};
