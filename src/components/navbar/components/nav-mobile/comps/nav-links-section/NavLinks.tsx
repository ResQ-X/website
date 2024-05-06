import { Link, useLocation } from "react-router-dom";
import styles from "../../../nav-desktop/comps/nav-links-section/NavLinks.module.css";
import { INavLink } from "../../../../../../models/NavigationTypes";

// Interfaces
interface IProps {
  allNavLinks: INavLink[] | null;
}

function NavLinks({ allNavLinks }: IProps) {
  // Functions, States and Variables
  const location = useLocation();
  return (
    <>
      {/* All Mobile Nav Links */}
      {allNavLinks?.map((navLinkObj, index) => (
        <div
          key={index + 1}
          className={`${styles.mobile_nav_link_wrapper} ${
            location.pathname === navLinkObj.path
              ? styles.active_link_wrapper
              : ""
          }`}
        >
          <Link to={navLinkObj.path}>{navLinkObj.name}</Link>
        </div>
      ))}
    </>
  );
}

export default NavLinks;
