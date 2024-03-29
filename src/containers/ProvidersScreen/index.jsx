import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import PageTitle from '$components/PageTitle';

import { useMountEffect } from '$common/hooks';
import {
  buildClient,
  renderLongTextParagraphs,
  sortByOrder,
} from '$common/contentful';

const client = buildClient();

const ProvidersScreen = () => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [doctors, setDoctors] = useState(null);

  // --------------------- ===
  //  EFFECTS
  // ---------------------
  useMountEffect(() => {
    client
      .getEntries({
        content_type: 'doctorDescriptions',
      })
      .then((entry) => {
        entry.items.sort(sortByOrder);
        setDoctors(entry.items);
      })
      .catch((err) => console.log(err));
  });

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <>
      <PageTitle title="Covenant Eye Care Providers" />
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1 my-5">
            <p className="text-xl">
              Covenant Eye Care doctors and staff have been caring for our patients’ eyes for over 50 years. Whether you need eyeglasses, surgery or management of a medical condition, we are here to help!
            </p>
          </div>
          {
            doctors ? (
              doctors.map((doctor) => (
                <Fragment key={doctor.fields.name}>
                  <div
                    className="col-12 col-sm-4 text-center mb-4"
                    id={doctor.fields.linkId}
                  >
                    <img src={doctor.fields.headshot.fields.file.url} className="providers-img" alt="" />
                    <p className="container-heading mb-0 mt-2">{doctor.fields.name}</p>
                    <p>{doctor.fields.title}</p>
                  </div>
                  <div className="col-12 col-sm-7 align-self-center mb-5">
                    {renderLongTextParagraphs(doctor.fields.longDescription, 'text-lg')}
                  </div>
                </Fragment>
              ))
            ) : 'Loading...'
          }
        </div>
      </div>
    </>
  );
};

ProvidersScreen.defaultProps = {

};

ProvidersScreen.propTypes = {

};

export default ProvidersScreen;
