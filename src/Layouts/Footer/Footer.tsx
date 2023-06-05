import React from "react";
import Wrap from "../Wrap/Wrap";
import styles from "./Footer.module.scss";
import logo from "./../../assets/img/CoffeeStyle-Logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Wrap>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </div>
        <div className={styles.copyright}>
          <Link className={styles.footerLink} to="">
            CoffeeStyle Inc. © 1996
          </Link>
        </div>
        <h4 className={styles.footerHeading}>Menu</h4>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            <Link className={styles.footerLink} to="/home">
              Home
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link className={styles.footerLink} to="/product">
              Our Products
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link className={styles.footerLink} to="/about">
              About
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link className={styles.footerLink} to="contract">
              Contract
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link className={styles.footerLink} to="styles">
              Styleguide
            </Link>
          </li>
        </ul>
        <h4 className={styles.footerHeading}> Follow us</h4>
        <ul className={styles.footerList} >
          <li className={styles.footerItem}>
            <Link className={styles.footerLink} to="/home">
              Facebook
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link className={styles.footerLink} to="/product">
              Instagram
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link className={styles.footerLink} to="/about">
              Pinterest
            </Link>
          </li>
          <li className={styles.footerItem}>
            <Link className={styles.footerLink} to="contract">
              Twitter
            </Link>
          </li>
        </ul>
        <h4 className={styles.footerHeading}>Contract us</h4>
        <div className={styles.footerContract}>
          <h4 >We’re Always Happy to Help</h4>
          <Link className={styles.footerLinkBig} to="">us@coffeestyle.io</Link>
        </div>
        <div className={styles.copyright}>This project using free template in Webflow.</div>
      </div>
    </Wrap>
  );
};

export default Footer;
