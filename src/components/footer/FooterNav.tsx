import { NavItem } from "../navbar/NavItem";

export const FooterNav = () => {
  return (
    <div className="navbar bg-white text-sm text-black">
      <div className="flex-1">
        <p> © 2024 All Rights Reserved</p>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <NavItem name="Privacy Policy" path="/privacy-policy" />
          <NavItem name="Terms of Use" path="/terms-of-use" />
          <NavItem name="Refunds" path="/refunds" />
          <NavItem name="Legal" path="/lega" />
          <NavItem name="Site Map" path="/site-map" />
        </ul>
      </div>
    </div>
  );
};
