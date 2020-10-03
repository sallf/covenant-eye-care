import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import PageTitle from '$components/PageTitle';

import { useMountEffect } from '$common/hooks';
import {
  buildClient,
  sortByOrder,
} from '$common/contentful';

const client = buildClient();

const PatientCenter = () => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [pageContent, setPageContent] = useState(null);

  // --------------------- ===
  //  EFFECTS
  // ---------------------
  useMountEffect(() => {
    client
      .getEntries({
        content_type: 'patientCenterPage',
      })
      .then((entry) => {
        entry.items.sort(sortByOrder);
        setPageContent(entry.items);
      })
      .catch((err) => console.log(err));
  });
  return (
    <>
      <PageTitle title="Covenant Eye Care Patient Center" />
      <div className="container">
        <div className="row">
          {
            pageContent && (
              pageContent.map((content) => (
                <div className="col-12" key={content.fields.id}>
                  <h2
                    className="section-heading"
                    id={content.fields.id}
                  >
                    {content.fields.sectionTitle}
                  </h2>
                  {
                    documentToReactComponents(content.fields.content)
                  }
                  <Link
                    className="cta"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </div>
              ))
            )
          }
        </div>
      </div>
    </>
  );
};

PatientCenter.defaultProps = {

};

PatientCenter.propTypes = {

};

export default PatientCenter;
