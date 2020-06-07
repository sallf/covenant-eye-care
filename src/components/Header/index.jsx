import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './index.scss';

const logo = require('$images/covenant-eye-care-logo.png');

const Header = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------

  // --------------------- ===
  //  STATE
  // ---------------------

  // --------------------- ===
  //  FUNCTIONS
  // ---------------------

  // --------------------- ===
  //  EFFECTS
  // ---------------------

  // --------------------- ===
  //  HANDLERS
  // ---------------------

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="text-right">
              Font Size:
              <span
                className={`${styles.fontButton} ${styles.fontButton__dec}`}
                role="button"
                title="Decrease Font Size"
              >
                A
              </span>
              <span
                className={`${styles.fontButton} ${styles.fontButton__current}`}
                role="button"
                title="Reset Font Size"
              >
                A
              </span>
              <span
                className={`${styles.fontButton} ${styles.fontButton__inc}`}
                role="button"
                title="Increase Font Size"
              >
                A
              </span>
            </div>
          </div>
        </div>
        <nav className={styles.navbar}>
          <NavLink
            to="/"
          >
            <img
              className={styles.logoImg}
              src={logo}
              alt=""
              title=""
            />
            <span className="sr-only">Go home</span>
          </NavLink>
          <button
            className={styles.hamburger}
            aria-controls="mainNav"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
            <span className={styles.hamburgerBar} />
          </button>
          <div className={styles.navbarInner}>
            <NavLink
              to="/"
              className={styles.navItem}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={styles.navItem}
            >
              Services
            </NavLink>
            <NavLink
              to="/patient-center"
              className={styles.navItem}
            >
              Patient Center
            </NavLink>
            <NavLink
              to="/providers"
              className={styles.navItem}
            >
              Providers
            </NavLink>
            <NavLink
              to="/contact"
              className={styles.navItem}
            >
              Contact
            </NavLink>
            <span className={styles.selectBar} />
          </div>
        </nav>
      </div>
    </div>
  );
};

Header.defaultProps = {

};

Header.propTypes = {

};

export default Header;
