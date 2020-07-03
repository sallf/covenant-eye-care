import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//import styles from './index.scss';

import PageTitle from '$components/PageTitle';

import { useMountEffect } from '$common/hooks';
import {
  buildClient,
  renderPhoneNumber,
  renderLongTextBreaks,
} from '$common/contentful';

const client = buildClient();

const phoneIcon = require('$images/icon-phone.svg');
const locationIcon = require('$images/icon-location.svg');
const hoursIcon = require('$images/icon-hours.svg');

const Contact = () => {
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
  return (
    <>
      <PageTitle title="Covenant Eye Care Contact" />
      <div className="container">
        <div className="row text-center section">
          <div className="col-12 col-md-6">
            <div className="card-container">
              <img src={phoneIcon} className="card-img" alt="Call Us" />
              <div className="card-text text-left">
                <div className="text-center mb-4">
                  {
                    companyData
                    && companyData.phoneNumber
                    && (
                      <a
                        href={`tel:${companyData.phoneNumber}`}
                        className="text-xxxl text-bold"
                      >
                        {
                          renderPhoneNumber(companyData.phoneNumber)
                        }
                      </a>
                    )
                  }
                </div>
                <p>Please call to schedule an appointment.</p>
                <p><strong>Important:</strong> Please have your insurance information available.</p>
                <p><strong>Fax:</strong> (704) 864-4884</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card-container">
              <img src={hoursIcon} className="card-img" alt="Our Hours" />
              <div className="card-text text-left">
                <div className="container-heading text-normal">Our hours are:</div>
                <p className="text-xxl text-bold">
                  {
                    companyData
                    && companyData.hours
                    && (
                      renderLongTextBreaks(companyData.hours)
                    )
                  }
                </p>
                <div className="container-heading text-normal">Expect us to be closed these holidays:</div>
                <ul className="extension-list">
                  <li>New Years Day</li>
                  <li>Good Friday</li>
                  <li>Memorial Day</li>
                  <li>Independence Day</li>
                  <li>Labor Day</li>
                  <li>Thanksgiving Holiday</li>
                  <li>Christmas Day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row section contact-page-location">
          <div className="col-12 col-md-6 col-lg-5 offset-md-3 offset-lg-6 address-wrapper">
            <div className="card-container text-center">
              <img src={locationIcon} className="card-img" alt="Our Location" />
              <div className="card-text text-left">
                <div className="container-heading text-normal">Our address is:</div>
                <p className="text-xxl text-bold" translate="no">
                  {
                    companyData
                    && renderLongTextBreaks(companyData.address)
                  }
                </p>
                <p>
                  <a
                    href="https://goo.gl/maps/zBmiyaj2HEU2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </p>
                <p>
                  <strong>Note:</strong>
                  &nbsp;We are located on the first floor of the Gaston Professional Center. Our main entrance is marked on the map to the left.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 gm-contact-page mb-4">
            <div className="google-maps">
              <iframe
                title="Map of Covenant Eye Care"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1299.2824204521212!2d-81.13700927142179!3d35.27355758981192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDE2JzI0LjMiTiA4McKwMDgnMTUuMiJX!5e1!3m2!1sen!2sus!4v1503175434067"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Contact.defaultProps = {

};

Contact.propTypes = {

};

export default Contact;
