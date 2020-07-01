import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import styles from './index.scss';

import Alert from '$components/Alert';

import { useMountEffect } from '$common/hooks';

import {
  buildClient,
  renderPhoneNumber,
  renderLongTextBreaks,
} from '$common/contentful';

const client = buildClient();

const logo = require('$images/covenant-eye-care-logo.png');

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="text-lg mb-0 text-center">{children}</p>
    ),
  },
};

const Header = (props) => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [alert, setAlert] = useState(null);

  // --------------------- ===
  //  EFFECTS
  // ---------------------
  useMountEffect(() => {
    client
      .getEntry('uAABoC5cMvrKd55HLb4LC')
      .then((entry) => {
        console.log('ent', entry.fields);
        setAlert(entry.fields);
      })
      .catch((err) => console.log(err));
  });

  // --------------------- ===
  //  HANDLERS
  // ---------------------

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <>
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
      {
        alert
        && alert.message
        && (
          <Alert type={alert.type}>
            {
              documentToReactComponents(alert.message, options)
            }
          </Alert>
        )
      }
    </>
  );
};

Header.defaultProps = {

};

Header.propTypes = {

};

export default Header;
