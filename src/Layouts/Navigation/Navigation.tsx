import React, {useState} from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./../../assets/img/CoffeeStyle-Logo.png";
import cart from "./../../assets/img/Cart Icon.png"
import styles from "./Navigation.module.scss";
import navBtn from "./../../assets/img/Menu Icon.png"
const Navigation = () => {
  const [navBarIsOpen , setNavBarIsOpen] = useState(false)
  const navListClasses = `${styles.navList} ${navBarIsOpen ? styles.open : ""}`
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link className={styles.headerLogo} to="/">
          <img src={logo} className={styles.headerImg}  alt="StyleCoffielogo"></img>
        </Link>
        <nav className={styles.nav}>
          <ul className={ navListClasses}>
            <li className={styles.navItem}>
              <NavLink className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/products">
                Our products
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/blogs">
                Blog
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}  to="/about">
                About
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink} to="/contact">
                Contact
              </NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}  to="/guide">
                Style guide
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.cart}>
            <img src={cart} className={styles.cartBtn} alt="cart" />
            <span className={styles.cartText}>Cart</span>
            <span className={styles.cartAmount}>0</span>
        </div>
        <div className={styles.openNav} onClick={() => {setNavBarIsOpen(prev => !prev)}}>
          <img src={navBtn} className={styles.openImg} alt=""></img>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
