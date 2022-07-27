import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Button } from "./Button";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className={styles.navbar}>
      {/* Title */}
      <div className={styles["nav-header"]}>
        <Link
          to="/"
          className={styles["navbar-logo"]}
          onClick={closeMobileMenu}
        >
          FLOWERIZED
        </Link>
        <div className={styles["menu-icon"]} onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>

      {/* Links */}
      <ul
        className={
          click
            ? `${styles["nav-menu"]} ${styles.active}`
            : `${styles["nav-menu"]}`
        }
      >
        <li className={styles["nav-item"]}>
          <Link
            to="/"
            className={styles["nav-links"]}
            onClick={closeMobileMenu}
          >
            HOME
          </Link>
        </li>

        <li className={styles["nav-item"]}>
          <Link
            to="/events"
            className={styles["nav-links"]}
            onClick={closeMobileMenu}
          >
            EVENTS
          </Link>
        </li>

        <li className={styles["nav-item"]}>
          <Link
            to="/customize"
            className={styles["nav-links"]}
            onClick={closeMobileMenu}
          >
            CUSTOMIZE
          </Link>
        </li>


        <li className={styles["nav-item"]}>
          <Link
            to="/reviews"
            className={styles["nav-links"]}
            onClick={closeMobileMenu}
          >
            REVIEWS
          </Link>
        </li>

        <li className={styles["nav-item"]}>
          <Link
            to="/aboutUs"
            className={styles["nav-links"]}
            onClick={closeMobileMenu}
          >
            ABOUT US
          </Link>
        </li>

        <li className={styles["nav-item"]}>
          <Link
            to="/contactUs"
            className={styles["nav-links"]}
            onClick={closeMobileMenu}
          >
            CONTACT US
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className={styles["nav-links-mobile"]}
            onClick={closeMobileMenu}
          >
            Log in
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className={styles["nav-links-mobile"]}
            onClick={closeMobileMenu}
          >
            Register
          </Link>
        </li>


      </ul>

      {button && <Button buttonStyle="btn--outline">Sign it</Button>}
    </nav>
  )
}

export default NavBar
