import React, { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Preloader from "../preloader/Preloader";

// Interfaces
interface IProps {
  children: React.ReactNode;
}
function Layout({ children }: IProps) {
  // Functions, States and Variables
  const location = useLocation();

  // States
  const [isPageLoading, setIsPageLoading] = useState(true);

  // UseEffects
  useEffect(() => {
    // window.scroll({ top: 0, behavior: "smooth" });
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
  }, [location]);

  return (
    <>
      {/* Preloader */}
      {isPageLoading && <Preloader />}

      {/* Main Layout */}
      {/* {!isPageLoading && ( */}
      <div
        style={{ display: `${isPageLoading ? "none" : "block"}` }}
        className={styles["app-container"]}
      >
        <Navbar />
        <div className={styles["app-container--inner"]}>{children}</div>
        <Footer />
      </div>
      {/* )} */}
    </>
  );
}

export default Layout;
