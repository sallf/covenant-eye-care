import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import styles from './index.scss';

const Hero = (props) => {
  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <>
      <div className="row">
        <div className="col-12 p-0">
          <div className={styles.wrapper}>
            <div className={styles.content}>
              <Link to="/contact" className={styles.link}>
                <p className={styles.text}>Your Eyes Show You The World</p>
                <p className="text-primary">
                  They show us your health.
                  <br />
                  Schedule an appointment to protect your precious gift of sight.
                </p>
                <div className="cta">Schedule an Appointment</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-12 text-center mb-4">
          <p className="section-heading mb-1">Need New Contacts?</p>
          <p className="text-lg">Online ordering is now available for your convenience.</p>
          <a
            className="cta"
            href="https://secure.yourlens.com/?DID=38673"
            target="_blank"
            rel="noreferrer noopener"
          >
            Order Now
          </a>
        </div>
      </div>
    </>
  );
};

Hero.defaultProps = {

};

Hero.propTypes = {

};

export default Hero;
