import { useEffect, useState } from "react";
import styles from "./NavMobile.module.css";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "../../../../assets/images/others/resq-logo-primary.png";
import navburgerIcon from "../../../../assets/images/svg/navburger-icon.svg";
import navcloseIcon from "../../../../assets/images/svg/navclose-icon.svg";
import NavLinks from "./comps/nav-links-section/NavLinks";
import PrimaryButton from "../../../buttons/primary-button/PrimaryButton";
import { INavLink } from "../../../../models/NavigationTypes";

// Interfaces
interface IProps {
  allNavLinks: INavLink[] | null;
}

function NavMobile({ allNavLinks }: IProps) {
  // Functions, States and Variables
  const location = useLocation();
  const [isMobileNavModalVisible, setIsMobileNavModalVisible] = useState(false);

  // Functions
  const handleToggleMobileNavVisibility = function () {
    setIsMobileNavModalVisible(!isMobileNavModalVisible);
  };

  //   UseEffects
  useEffect(() => {
    setIsMobileNavModalVisible(false);
  }, [location]);

  return (
    <div className={styles.MOBILE_navbar_container__inner}>
      {/* Company Logo section / Left Section  */}
      <Link to={"/"}>
        <img
          className={styles.mobile__company_logo_img}
          src={companyLogo}
          alt=""
        />
      </Link>

      {/* Navburger Container */}
      <div className="nav-burger-container">
        <button
          onClick={() => handleToggleMobileNavVisibility()}
          className="image-wrapper"
        >
          <img src={navburgerIcon} alt="" />
        </button>
      </div>

      {/* Dropdown Navbar Container */}
      {isMobileNavModalVisible && (
        <div className={styles.mobile_navbar_modal_container}>
          {/* Navclose Container */}
          <div className={styles.nav_close_container}>
            {/* Company Logo section / Left Section  */}
            <Link to={"/"}>
              <img
                className={styles.mobile__company_logo_img}
                src={companyLogo}
                alt=""
              />
            </Link>

            <button
              onClick={() => handleToggleMobileNavVisibility()}
              className="image-wrapper"
            >
              <img src={navcloseIcon} alt="" />
            </button>
          </div>

          <div className={styles.mobile_nav_links_container}>
            {/* Nav Links Section */}
            <NavLinks allNavLinks={allNavLinks} />

            {/* Lower section || Join Waitlist Button */}
            {/* Waitlist Button */}
            <PrimaryButton
              placeholder="Join Waitlist"
              onClick={() => (window.location.href = "/#waitlist")}
              className={styles.waitlist_button_wrapper}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavMobile;
