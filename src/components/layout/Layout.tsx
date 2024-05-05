import React, { useEffect } from "react";
import styles from "./Layout.module.css";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

// Interfaces
interface IProps {
  children: React.ReactNode;
}
function Layout({ children }: IProps) {
  // Functions, States and Variables
  const location = useLocation();

  // UseEffects
  useEffect(() => {
    window.scroll({ behavior: "smooth" });
  }, [location]);
  return (
    <div className={styles["app-container"]}>
      <Navbar />
      <div className={styles["app-container--inner"]}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
