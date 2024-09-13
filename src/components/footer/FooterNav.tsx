import { NavItem } from "../navbar/NavItem";

export const FooterNav = () => {
  return (
    <div className="navbar flex-col bg-white text-sm text-black lg:flex-row">
      <div className="flex-1">
        <p> © 2024 All Rights Reserved</p>
      </div>
      <div className="flex lg:flex-none ">
        <ul className="menu menu-horizontal items-center justify-center px-1 lg:items-end lg:justify-end ">
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
