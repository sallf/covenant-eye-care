import React, {
  useState,
  useLayoutEffect,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import styles from './index.scss';

import Alert from '$components/Alert';

import { useMountEffect } from '$common/hooks';

import {
  buildClient,
  sortByOrder,
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

const activeClassName = styles.navItem__current;
const fontCookieName = 'cecFontSize=';

const Header = () => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [alert, setAlert] = useState(null);
  const [navActive, setNavActive] = useState(false);
  const [selectPosition, setSelectPosition] = useState({
    // likely start positions
    left: 15,
    width: 60,
    top: 46,
  });
  const [fontSize, setFontSize] = useState(15);
  const [careers, setCareers] = useState([]);

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

  // Font size
  const handleFontSize = (int) => {
    let size = fontSize;

    size = parseInt(fontSize, 10);

    switch (int) {
      case -1:
        if (size > 13) {
          size -= 2;
        }
        break;
      case 0:
        size = 15;
        break;
      case 1:
        if (size < 21) {
          size += 2;
        }
        break;
      default:
        // no default
    }

    setFontSize(size);
  };

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

  useMountEffect(() => {
    const storedSize = localStorage.getItem(fontCookieName);
    if (storedSize) {
      setFontSize(parseInt(storedSize, 10));
    }
  });

  // Get career info
  useMountEffect(() => {
    client
      .getEntries({
        content_type: 'careersPage',
      })
      .then((entry) => {
        entry.items.sort(sortByOrder);
        setCareers(entry.items);
      })
      .catch((err) => console.log(err));
  });

  useLayoutEffect(() => {
    handleMouseOut();
  }, [handleMouseOut, location]);

  useEffect(() => {
    document.getElementById('html').style.fontSize = `${fontSize}px`;
    localStorage.setItem(fontCookieName, fontSize);
    // Reset underline
    handleMouseOut();
  }, [fontSize, handleMouseOut]);

  // --------------------- ===
  //  RENDER
  // ---------------------

  return (
    <>
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex">
              {
                careers.length > 0 && (
                  <div className={`${styles.alert} ${styles.width100}`}>
                    <Link to="/careers">
                      We&#39;re hiring!
                    </Link>
                  </div>
                )
              }
              <div className={`text-right ${styles.width100}`}>
                Font Size:
                <button
                  className={`${styles.fontButton} ${styles.fontButton__dec} ${fontSize < 15 ? styles.fontButton__current : ''}`}
                  title="Decrease Font Size"
                  onClick={() => handleFontSize(-1)}
                >
                  A
                </button>
                <button
                  className={`${styles.fontButton} ${fontSize === 15 ? styles.fontButton__current : ''}`}
                  title="Reset Font Size"
                  onClick={() => handleFontSize(0)}
                >
                  A
                </button>
                <button
                  className={`${styles.fontButton} ${styles.fontButton__inc} ${fontSize > 15 ? styles.fontButton__current : ''}`}
                  title="Increase Font Size"
                  onClick={() => handleFontSize(1)}
                >
                  A
                </button>
              </div>
            </div>
          </div>
          <nav
            className={styles.navbar}
          >
            <Link
              to="/"
            >
              <img
                className={styles.logoImg}
                src={logo}
                alt=""
                title=""
              />
              <span className="sr-only">Go home</span>
            </Link>
            <button
              className={`${styles.hamburger} ${navActive ? styles.hamburger__active : ''}`}
              aria-controls="mainNav"
              aria-expanded="false"
              onClick={() => setNavActive((prevState) => !prevState)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
              <span className={styles.hamburgerBar} />
            </button>
            <div
              className={`${styles.navbarInner} ${!navActive ? styles.navbarInner__notActive : ''}`}
              ref={navRef}
              id="mainNav"
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
