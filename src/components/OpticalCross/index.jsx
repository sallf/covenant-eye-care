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
    extended,
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
          {
            extended && (
              <>
                <div className="col-12 text-center">
                  <p className="section-heading text-center">Optical Cross is our new vision care savings program!</p>
                </div>
                <div className="col-md-6 mt-4">
                  <p><b>Enrollment Fees</b></p>
                  <ul>
                    <li><p>Individual ........ $30</p></li>
                    <li><p>Couple ............ $50</p></li>
                    <li><p>Family ............. $70</p></li>
                  </ul>
                  <p>Children&#39;s exams only $99 with family enrollment.</p>
                </div>
                <div className="col-md-6 mt-4">
                  <p><b>Other Benefits</b></p>
                  <ul>
                    <li><p>No limit on the number of times you can access savings throughout the year.</p></li>
                    <li><p>Thirty (30) day unconditional guarantee on glasses and contact lenses.</p></li>
                    <li><p>24 hour emergency eye care services.</p></li>
                  </ul>
                </div>
                <div className="col-md-6 mt-4">
                  <p><b>Here is a List of Your Savings...</b></p>
                  <ul>
                    <li><p>Save 50% on eye exams.</p></li>
                    <li><p>Save 30% on frames.*</p></li>
                    <li><p>Save 30% on prescription lenses.*</p></li>
                    <li><p>Save up to 50% on a second pair of lenses.*</p></li>
                    <li><p>Save 10-20% on contact lenses.</p></li>
                    <li><p>Save 15% on contact lens fitting/refitting.</p></li>
                    <li><p>Save 30% on non-prescription sunglasses.</p></li>
                    <li><p>Save 30% on medical eye care.**</p></li>
                  </ul>
                  <p>Plus, savings on Corneal Reshaping (CRT) and LASIK (refractive surgery).</p>
                  <p className="text-sm text-gray mb-0">*Limited exclusions apply.</p>
                  <p className="text-sm text-gray">**May not be combined with any other insurance.</p>
                </div>
                <div className="col-md-6 mt-4">
                  <p><b>Value Eyewear Packages</b></p>
                  <ul>
                    <li><p>Single Vision .................................... $149</p></li>
                    <li><p>Bifocals ............................................ $199</p></li>
                    <li><p>Trifocals ........................................... $219</p></li>
                    <li><p>Progressive No-line Multifocals ...... $299</p></li>
                  </ul>
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

OpticalCross.defaultProps = {
  isLink: false,
  extended: false,
};

OpticalCross.propTypes = {
  isLink: PropTypes.bool,
  extended: PropTypes.bool,
};

export default OpticalCross;
