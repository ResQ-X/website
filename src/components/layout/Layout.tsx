import React, { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Preloader from "../preloader/Preloader";
import { motion } from "framer-motion";

// Interfaces
interface IProps {
  children: React.ReactNode;
}
function Layout({ children }: IProps) {
  // Functions, States and Variables
  const location = useLocation();

  // States
  const [isFirstTimeLoadingUpApp, setIsFirstTimeLoadingUpApp] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  // UseEffects
  useEffect(() => {
    if (location.hash !== "#waitlist") window.scroll({ top: 0 });
  }, [location]);

  useEffect(() => {
    const loaderTimer = import.meta.env.VITE_APP_PRELOADER_TIMER || 5000;
    const preloaderTimeout = setTimeout(() => {
      setIsPageLoading(false);
    }, loaderTimer);

    // Cleanup
    return () => {
      clearTimeout(preloaderTimeout);
    };
  }, []);

  useEffect(() => {
    // Set a local storage value to detect that this is first time visit
    const isFirstTimeVisit = localStorage.getItem("firstTimeVisit");
    if (isFirstTimeVisit) setIsFirstTimeLoadingUpApp(true);

    // If the user has loaded up app initially but is navigating page, remove the local storage value for first visit
    if (localStorage.getItem("firstTimeVisit")) {
      return () => {
        // Cleanup
        localStorage.removeItem("firstTimeVisit");
      };
    }
  }, [location]);

  return (
    <>
      {/* Preloader */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isFirstTimeLoadingUpApp && isPageLoading ? 1 : 0 }}
        exit={{ opacity: 0 }}
      >
        {<Preloader />}
      </motion.span>

      {/* Main Layout */}
      <div
        style={{
          display: isFirstTimeLoadingUpApp && isPageLoading ? "none" : "block",
        }}
        className={styles["app-container"]}
      >
        <>
          <Navbar />
          <div className={styles["app-container--inner"]}>{children}</div>
          <Footer />
        </>
      </div>
    </>
  );
}

export default Layout;
