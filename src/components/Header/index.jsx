import React, {
  useState,
  useLayoutEffect,
  useRef,
  useCallback,
} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import styles from './index.scss';

import Alert from '$components/Alert';

import { useMountEffect } from '$common/hooks';

import {
  buildClient,
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

const activeClassName = 'is-active';

const Header = () => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [alert, setAlert] = useState(null);
  const [selectPosition, setSelectPosition] = useState({
    // likely start positions
    left: 15,
    width: 60,
    top: 46,
  });

  // --------------------- ===
  //  REFS
  // ---------------------
  const navRef = useRef(null);
  const location = useLocation();

  // --------------------- ===
  //  HANDLERS
  // ---------------------
  const setPos = useCallback((targ) => {
    const {
      width,
      height,
    } = targ.getBoundingClientRect();
    setSelectPosition({
      left: Math.round(targ.offsetLeft + 15), // Relative to parent. Offset half width
      width: Math.round(width - 30),
      top: Math.round(height - 18),
    });
  }, []);

  const handleMouseIn = useCallback((evt) => {
    setPos(evt.target);
  }, [setPos]);

  const handleMouseOut = useCallback(() => {
    const { children } = navRef.current;
    const arr = Array.from(children);

    arr.forEach((nav) => {
      if (nav.classList.contains(activeClassName)) {
        setPos(nav);
      }
    });
  }, [setPos]);

  // --------------------- ===
  //  EFFECTS
  // ---------------------
  useMountEffect(() => {
    client
      .getEntry('uAABoC5cMvrKd55HLb4LC')
      .then((entry) => {
        setAlert(entry.fields);
      })
      .catch((err) => console.log(err));
  });

  useMountEffect(() => {
    window.addEventListener('resize', handleMouseOut);

    return () => (
      window.removeEventListener('resize', handleMouseOut)
    );
  });

  useLayoutEffect(() => {
    handleMouseOut();
  }, [handleMouseOut, location]);

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
          <nav
            className={styles.navbar}
          >
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
            <div
              className={styles.navbarInner}
              ref={navRef}
            >
              <NavLink
                to="/"
                exact
                className={styles.navItem}
                activeClassName={activeClassName}
                onMouseEnter={handleMouseIn}
                onMouseLeave={handleMouseOut}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={styles.navItem}
                activeClassName={activeClassName}
                onMouseEnter={handleMouseIn}
                onMouseLeave={handleMouseOut}
              >
                Services
              </NavLink>
              <NavLink
                to="/patient-center"
                className={styles.navItem}
                activeClassName={activeClassName}
                onMouseEnter={handleMouseIn}
                onMouseLeave={handleMouseOut}
              >
                Patient Center
              </NavLink>
              <NavLink
                to="/providers"
                className={styles.navItem}
                activeClassName={activeClassName}
                onMouseEnter={handleMouseIn}
                onMouseLeave={handleMouseOut}
              >
                Providers
              </NavLink>
              <NavLink
                to="/contact"
                className={styles.navItem}
                activeClassName={activeClassName}
                onMouseEnter={handleMouseIn}
                onMouseLeave={handleMouseOut}
              >
                Contact
              </NavLink>
              <span
                className={styles.selectBar}
                style={{
                  left: selectPosition.left,
                  width: selectPosition.width,
                  top: selectPosition.top,
                }}
              />
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
