import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import companyLogo from "../../assets/images/others/resq-logo-secondary.png";
import {
  companyLinks,
  companyLocations,
  productLinks,
  socialsLinks,
} from "../../constants/FooterLinks";

function Footer() {
  // Functions, States and Variables
  const currentYear = new Date().getFullYear();
  return (
    <div id="contact" className={styles.footer_container}>
      <div className={styles.footer_container__inner}>
        {/* Company Logo and Links Container*/}
        <div className={styles.footer__links_and_logo_container}>
          {/*  Left Section  */}
          <div className={styles.footer_left_container}>
            {/* Company Logo section */}
            <div className={styles.company_logo_wrapper}>
              <img src={companyLogo} alt="" />
            </div>
          </div>

          {/*  Right Section  */}
          <div className={styles.footer_right_container}>
            {/* Footer Link Container */}
            <div className={`${styles.footer_links_container}`}>
              {/* Link Colum One  || COMPANY*/}
              <div className={styles.footer_links_column}>
                <div className={styles.link_col_title}>COMPANY</div>

                {/* Company Links */}
                <div className={styles.footer_links_wrapper}>
                  {companyLinks?.map((footerLink, index) => (
                    <div key={index + 1} className={styles.footer_column_link}>
                      <Link to={footerLink.url}>{footerLink.name}</Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link Colum Two || PRODUCT */}
              <div className={styles.footer_links_column}>
                <div className={styles.link_col_title}>PRODUCT</div>

                {/* Product Links */}
                <div className={styles.footer_links_wrapper}>
                  {productLinks?.map((footerLink, index) => (
                    <div key={index + 1} className={styles.footer_column_link}>
                      <Link to={footerLink.url}>{footerLink.name}</Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link Colum Three || SOCIALS */}
              <div className={styles.footer_links_column}>
                <div className={styles.link_col_title}>SOCIALS</div>

                {/* Socials Links */}
                <div className={styles.footer_links_wrapper}>
                  {socialsLinks?.map((footerLink, index) => (
                    <div key={index + 1} className={styles.footer_column_link}>
                      <Link to={footerLink.url}>{footerLink.name}</Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Link Colum Three || LOCATIONS */}
              <div className={styles.footer_links_column}>
                <div className={styles.link_col_title}>LOCATIONS</div>

                {/* Socials Links */}
                <div className={styles.footer_links_wrapper}>
                  {companyLocations?.map((location, index) => (
                    <div key={index + 1} className={styles.footer_column_link}>
                      <span>{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Link Container*/}
        <div className={styles.email_link_container}>
          Send us a mail at{" "}
          <a href="mailto:hello@resqx.com" target="_blank" rel="noreferrer">
            hello@resqx.com
          </a>
        </div>

        {/* Copy Right Container */}
        <div className={styles.copy_right_container}>
          Copyright {currentYear.toString()} Resqx. All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
