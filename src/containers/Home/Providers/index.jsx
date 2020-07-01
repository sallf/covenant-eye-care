import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useMountEffect } from '$common/hooks';
import { buildClient, renderLongTextParagraphs } from '$common/contentful';

const client = buildClient();

const Providers = () => {
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
        // Note contentful sets order by last edited
        // I added an "order" field but am not using it yet
        setDoctors(entry.items);
      })
      .catch((err) => console.log(err));
  });

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className="container">
      <div className="row section">
        <div className="col-12 text-center">
          <h2 className="section-heading">Our Providers</h2>
        </div>
        {
          doctors ? (
            doctors.map((doctor) => (
              <Fragment key={doctor.fields.name}>
                <div className="col-12 col-sm-4 text-center mb-4">
                  <img src={doctor.fields.headshot.fields.file.url} className="providers-img" alt="" />
                  <p className="container-heading mb-0 mt-2">{doctor.fields.name}</p>
                  <p>{doctor.fields.title}</p>
                </div>
                <div className="col-12 col-sm-7 align-self-center mb-5">
                  {renderLongTextParagraphs(doctor.fields.description, 'text-lg')}
                  <Link to={`/providers#${doctor.fields.linkId}`}>
                    Learn More
                  </Link>
                </div>
              </Fragment>
            ))
          ) : 'Loading...'
        }
      </div>
    </div>
  );
};

Providers.defaultProps = {

};

Providers.propTypes = {

};

export default Providers;
