import styles from "./NavLinks.module.css";
import { INavLink } from "../../../../../../models/NavigationTypes";
import { Link, useLocation } from "react-router-dom";

// Interfaces
interface IProps {
  allNavLinks: INavLink[] | null;
}

function NavLinks({ allNavLinks }: IProps) {
  // Functions, States and Variables
  const location = useLocation();
  return (
    <div className={styles.top_nav_link_section}>
      {/* All Desktop Nav Links */}
      {allNavLinks?.map((navLinkObj, index) => (
        <div
          key={index + 1}
          className={`${styles.nav_link_wrapper} ${
            location.pathname === navLinkObj.path
              ? styles.active_link_wrapper
              : ""
          }`}
        >
          <Link to={navLinkObj.path}>{navLinkObj.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default NavLinks;
