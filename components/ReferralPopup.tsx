"use client";
import { useState, useEffect } from "react";
import { X, Gift, Star, Shield, Clock, AlertCircle, Zap } from "lucide-react";
import { useReferralPopup } from "../hooks/useReferralPopup";

interface PopupContent {
  headline: string;
  subheadline: string;
  description: string;
  ctaText: string;
  benefits: {
    icon: "star" | "shield" | "clock" | "zap";
    text: string;
  }[];
  trustIndicators: string;
  urgency?: string;
}

interface ReferralPopupProps {
  referralLink: string;
  delay?: number;
  cooldownDays?: number;
  sessionOnly?: boolean;
  voucherAmount?: number;
  brandName?: string;
  enableExitIntent?: boolean;
  showOnlyOnHomePage?: boolean;

  // Mutable content for different triggers
  welcomeContent?: Partial<PopupContent>;
  exitIntentContent?: Partial<PopupContent>;
}

// Default content templates
const DEFAULT_WELCOME_CONTENT: PopupContent = {
  headline: "🎉 Welcome!",
  subheadline: "FREE Voucher Just for You!",
  description: "Join ResQX today and receive a FREE voucher to get started!",
  ctaText: "🚀 Claim My ₦{amount} Now",
  benefits: [
    { icon: "star", text: "Instant ₦{amount} credit upon signup" },
    { icon: "shield", text: "No hidden fees or commitments" },
    { icon: "clock", text: "Limited time exclusive offer" },
  ],
  trustIndicators: "✅ Trusted by 10k+ users • ⚡ Instant activation",
};

const DEFAULT_EXIT_CONTENT: PopupContent = {
  headline: "⚠️ Wait! Don't Leave Yet",
  subheadline: "You're About to Miss Out!",
  description:
    "Before you go, grab your FREE ₦{amount} voucher - this offer expires soon!",
  ctaText: "⏰ Get My ₦{amount} Before I Leave",
  benefits: [
    { icon: "zap", text: "Last chance for ₦{amount} free credit" },
    { icon: "clock", text: "Offer expires when you leave this page" },
    { icon: "star", text: "Join thousands of satisfied users" },
  ],
  trustIndicators: "🔥 Limited time • ⚡ Instant access • 🎯 No catch",
  urgency: "This offer will disappear when you close this tab!",
};

const getIcon = (iconName: string, size = 16, color?: string) => {
  const iconProps = { size, ...(color && { style: { color } }) };

  switch (iconName) {
    case "star":
      return <Star {...iconProps} />;
    case "shield":
      return <Shield {...iconProps} />;
    case "clock":
      return <Clock {...iconProps} />;
    case "zap":
      return <Zap {...iconProps} />;
    default:
      return <Star {...iconProps} />;
  }
};

export default function ReferralPopup({
  referralLink,
  delay = 3000,
  cooldownDays = 7,
  sessionOnly = false,
  voucherAmount = 5000,
  brandName = "ResQX",
  enableExitIntent = true,
  showOnlyOnHomePage = true, // Default to true for home page only
  welcomeContent = {},
  exitIntentContent = {},
}: ReferralPopupProps) {
  // Check if we're on the home page
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (!showOnlyOnHomePage) {
      setIsHomePage(true);
      return;
    }

    // Check if current page is home page
    const checkHomePage = () => {
      const pathname = window.location.pathname;
      // Consider these as home page paths
      const homePagePaths = ["/", "/home", ""];
      const isHome =
        homePagePaths.includes(pathname) || pathname === window.location.origin;
      setIsHomePage(isHome);
    };

    checkHomePage();

    // Listen for navigation changes (for SPAs)
    const handleLocationChange = () => {
      checkHomePage();
    };

    // For Next.js router
    if (typeof window !== "undefined" && window.history) {
      const originalPushState = window.history.pushState;
      const originalReplaceState = window.history.replaceState;

      window.history.pushState = function (...args) {
        originalPushState.apply(window.history, args);
        setTimeout(handleLocationChange, 0);
      };

      window.history.replaceState = function (...args) {
        originalReplaceState.apply(window.history, args);
        setTimeout(handleLocationChange, 0);
      };

      window.addEventListener("popstate", handleLocationChange);

      return () => {
        window.history.pushState = originalPushState;
        window.history.replaceState = originalReplaceState;
        window.removeEventListener("popstate", handleLocationChange);
      };
    }
  }, [showOnlyOnHomePage]);

  const { isVisible, isClosing, popupType, closePopup, handleClaim } =
    useReferralPopup({
      delay,
      cooldownDays,
      sessionOnly,
      enableExitIntent,
      showOnlyOnHomePage: isHomePage, // Pass to hook
    });

  // Don't render if not on home page (when restricted)
  if (showOnlyOnHomePage && !isHomePage) {
    return null;
  }

  if (!isVisible) return null;

  // Merge default content with custom content
  const isExitIntent = popupType === "exit-intent";
  const content = {
    ...DEFAULT_WELCOME_CONTENT,
    ...(isExitIntent ? DEFAULT_EXIT_CONTENT : {}),
    ...(isExitIntent ? exitIntentContent : welcomeContent),
  };

  // Replace amount placeholders
  const formatContent = (text: string) =>
    text.replace(/\{amount\}/g, voucherAmount.toLocaleString());

  return (
    <>
      {/* Portal-like backdrop */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Animated backdrop with different colors for exit intent */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isClosing ? "opacity-0" : "opacity-70"
          }`}
          style={{
            background: isExitIntent
              ? `radial-gradient(circle at center, rgba(173, 0, 0, 0.3) 0%, rgba(36, 34, 32, 0.9) 100%)`
              : `radial-gradient(circle at center, rgba(37, 76, 229, 0.4) 0%, rgba(36, 34, 32, 0.8) 100%)`,
          }}
          onClick={() => closePopup("close")}
        />

        {/* Main popup with exit intent styling */}
        <div
          className={`relative bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden transform transition-all duration-500 ${
            isClosing
              ? "scale-90 opacity-0 -translate-y-4"
              : "scale-100 opacity-100 translate-y-0"
          } ${isExitIntent ? "ring-4 ring-red-400 ring-opacity-50" : ""}`}
        >
          {/* Close button with context-aware styling */}
          <button
            onClick={() => closePopup("close")}
            className="absolute top-4 right-4 p-2 transition-colors z-20 bg-white rounded-full shadow-lg hover:shadow-xl"
            style={{
              color: "#474747",
            }}
            onMouseEnter={(e) => {
              const hoverColor = isExitIntent ? "#AD0000" : "#FF8500";
              e.currentTarget.style.backgroundColor = hoverColor;
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#474747";
            }}
            aria-label="Close popup"
          >
            <X size={20} />
          </button>

          {/* Header with context-aware gradient */}
          <div
            className="text-white p-8 text-center relative overflow-hidden"
            style={{
              background: isExitIntent
                ? `linear-gradient(135deg, #AD0000 0%, #FF8500 50%, #254CE5 100%)`
                : `linear-gradient(135deg, #FF8500 0%, #254CE5 100%)`,
            }}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#FF8500] rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#254CE5] rounded-full opacity-60"></div>
              {isExitIntent && (
                <div className="absolute top-1/4 right-1/3 w-12 h-12 bg-[#AD0000] rounded-full opacity-40"></div>
              )}
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-white bg-opacity-20 rounded-full p-4 backdrop-blur-sm">
                  {isExitIntent ? (
                    <AlertCircle size={40} className="text-white" />
                  ) : (
                    <Gift size={40} className="text-white" />
                  )}
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-3xl font-bold mb-3">
                {formatContent(content.headline)} {brandName}!
              </h2>

              <div
                className="text-5xl font-extrabold text-white drop-shadow-lg mb-2"
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                ₦{voucherAmount.toLocaleString()}
              </div>

              <p className="text-xl font-medium opacity-95">
                {content.subheadline}
              </p>

              {/* Urgency message for exit intent */}
              {isExitIntent && content.urgency && (
                <div className="mt-4 bg-white bg-opacity-20 rounded-lg p-3">
                  <p className="text-sm font-medium text-yellow-200">
                    ⚠️ {content.urgency}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Body content with context-aware styling */}
          <div className="p-8" style={{ backgroundColor: "#fafafa" }}>
            {/* Description */}
            <p className="text-center text-[#474747] mb-6 text-lg leading-relaxed">
              {formatContent(content.description)}
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 gap-4 mb-8">
              {content.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-[#474747]"
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: isExitIntent ? "#AD0000" : "#007300",
                      opacity: 0.1,
                    }}
                  >
                    {getIcon(
                      benefit.icon,
                      16,
                      isExitIntent ? "#AD0000" : "#007300"
                    )}
                  </div>
                  <span className="font-medium">
                    {formatContent(benefit.text)}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons with context-aware styling */}
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => handleClaim(referralLink)}
                className="w-full text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl relative overflow-hidden"
                style={{
                  background: isExitIntent
                    ? `linear-gradient(135deg, #AD0000 0%, #FF8500 100%)`
                    : `linear-gradient(135deg, #FF8500 0%, #254CE5 100%)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = isExitIntent
                    ? `linear-gradient(135deg, #8B0000 0%, #e67700 100%)`
                    : `linear-gradient(135deg, #e67700 0%, #1e3bb8 100%)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = isExitIntent
                    ? `linear-gradient(135deg, #AD0000 0%, #FF8500 100%)`
                    : `linear-gradient(135deg, #FF8500 0%, #254CE5 100%)`;
                }}
              >
                {formatContent(content.ctaText)}
              </button>

              <button
                onClick={() => closePopup("maybe_later")}
                className="w-full font-medium py-3 px-6 rounded-xl transition-all duration-200 border-2"
                style={{
                  color: "#474747",
                  borderColor: "#474747",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#474747";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#474747";
                }}
              >
                {isExitIntent ? "No Thanks, Let Me Leave" : "Maybe Later"}
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 text-center">
              <p
                className="text-sm flex items-center justify-center space-x-4"
                style={{ color: "#474747" }}
              >
                <span>{content.trustIndicators}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
