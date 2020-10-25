import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './index.scss';

import { useMountEffect } from '$common/hooks';
import {
  buildClient,
  renderPhoneNumber,
  renderLongTextBreaks,
} from '$common/contentful';

const client = buildClient();

const Footer = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------

  // --------------------- ===
  //  STATE
  // ---------------------
  const [companyData, setCompanyData] = useState(null);

  // --------------------- ===
  //  EFFECTS
  // ---------------------
  useMountEffect(() => {
    client
      .getEntry('4Pg9yfwYt6daUdxjO5z5I0')
      .then((entry) => {
        setCompanyData(entry.fields);
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
    <footer
      className={styles.wrapper}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p className="footer-heading">Links</p>
            <div className="row">
              <div className="col-6">
                <p className="footer-sub-heading" id="footerServices">Services</p>
                <ul className="footer-links" aria-labelledby="footerServices">
                  <li>
                    <Link
                      to="/services#eyeExams"
                    >
                      Eye Exams
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#surgery"
                    >
                      Surgery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services#opticalShop"
                    >
                      Optical Shop
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <p className="footer-sub-heading" id="footerSite">Site</p>
                <ul className="footer-links" aria-labelledby="footerSite">
                  <li>
                    <Link
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/patient-center"
                    >
                      Patient Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/providers"
                    >
                      Providers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <p className="footer-heading">Office Info</p>
            <div className="row">
              <div className="col-12 col-md-6">
                <p className="footer-sub-heading" id="footerCall">Call</p>
                <ul className="footer-links" aria-labelledby="footerCall">
                  {
                    companyData
                    && companyData.phoneNumber
                    && (
                      <li>
                        <a href={`tel:${companyData.phoneNumber}`}>
                          {
                            renderPhoneNumber(companyData.phoneNumber)
                          }
                        </a>
                      </li>
                    )
                  }
                </ul>
                <p className="footer-sub-heading" id="footerHours">Hours</p>
                <ul className="footer-links" aria-labelledby="footerHours">
                  {
                    companyData
                    && companyData.hours
                    && (
                      <li>
                        {
                          renderLongTextBreaks(companyData.hours)
                        }
                      </li>
                    )
                  }
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <p className="footer-sub-heading" id="footerAddress">Address</p>
                <address>
                  <p className="footer-links" translate="no" aria-labelledby="footerAddress">
                    {
                      companyData
                      && renderLongTextBreaks(companyData.address)
                    }
                    <br />
                    <a
                      href="https://goo.gl/maps/zBmiyaj2HEU2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </p>
                </address>
                <p className="footer-links">
                  <strong>Note:</strong>
                  &nbsp;We are located on the first floor of the Gaston Professional Center. Park
                  <a href="https://goo.gl/maps/CcCguteBVGJ2" target="_blank" rel="noreferrer noopener">
                    &nbsp;in this parking lot
                  </a>
                  , enter through the main doors and you’ll see us immedietly to your right.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="google-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.9703667927056!2d-81.13941538962241!3d35.273997599244765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856bfbcb2a317c1%3A0x10ce98d789bfdb31!2sCovenant%20Eye%20Care%20Gastonia%20NC!5e0!3m2!1sen!2sus!4v1571281551057!5m2!1sen!2sus"
                width="600"
                height="450"
                frameBorder="0"
                allowFullScreen=""
                title="google map"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.defaultProps = {

};

Footer.propTypes = {

};

export default Footer;
