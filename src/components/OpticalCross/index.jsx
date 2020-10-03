import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './index.scss';

const crossLogo = require('$images/optical-cross.svg');

const OpticalCross = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    isLink,
  } = props;

  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.wrapperInner}>
        <div className="row m-0">
          <div
            className={`col-12 col-md-6 pt-4 pb-4 align-items-center justify-content-center d-flex text-center ${styles.blueBox}`}
          >
            <h3 className="text-xxl text-uppercase text-white">
              No vision insurance?
              <br />
              <span className="text-xxxl">No problem.</span>
            </h3>
          </div>
          <div
            className="col-12 col-md-6 pt-4 pb-4 align-items-center justify-content-center d-flex flex-column text-center"
          >
            {
              isLink ? (
                <>
                  <Link className="w-100" to="/services#eyewearCenter">
                    <img src={crossLogo} className="icon-xl" alt="" />
                    <span className="sr-only">Learn more about Optical Cross</span>
                  </Link>
                  <p className="text-lg">We have a vision savings program for you!</p>
                  <Link to="/services#eyewearCenter">
                    <span className="cta mt-3">Learn More</span>
                  </Link>
                </>
              ) : (
                <>
                  <img src={crossLogo} className="icon-xl" alt="" />
                  <p className="text-lg">We have a vision savings program for you!</p>
                </>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

OpticalCross.defaultProps = {
  isLink: false,
};

OpticalCross.propTypes = {
  isLink: PropTypes.bool,
};

export default OpticalCross;
