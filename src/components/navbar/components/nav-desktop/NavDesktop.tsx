import styles from "./NavDesktop.module.css";
import { Link } from "react-router-dom";
import companyLogo from "../../../../assets/images/others/resq-logo-primary.png";
import NavLinks from "./comps/nav-links-section/NavLinks";
import PrimaryButton from "../../../buttons/primary-button/PrimaryButton";
import { INavLink } from "../../../../models/NavigationTypes";

// Interfaces
interface IProps {
  allNavLinks: INavLink[] | null;
}
function NavDesktop({ allNavLinks }: IProps) {
  // Functions, States and Variables
  // const navigate = useNavigate();

  return (
    <section className={styles.navbar__desktop_view_container}>
      {/* Company Logo section / Left Section  */}
      <Link to={"/"} className={styles.company_logo_wrapper}>
        <img src={companyLogo} alt="resq logo" />
      </Link>

      {/* Nav Link Section / Midle Section*/}
      <NavLinks allNavLinks={allNavLinks} />

      {/* Action Button Section / Right Section */}
      <div className={styles.navbar__action_button_section}>
        {/* Waitlist Button */}
        <PrimaryButton
          placeholder="Join Waitlist"
          onClick={() => (window.location.href = "/#waitlist")}
          className={styles.waitlist_button_wrapper}
        />
      </div>
    </section>
  );
}

export default NavDesktop;
