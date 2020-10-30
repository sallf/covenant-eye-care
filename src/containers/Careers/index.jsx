import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import ReactMarkdown from 'react-markdown';


import PageTitle from '$components/PageTitle';

import { useMountEffect } from '$common/hooks';
import {
  buildClient,
  sortByOrder,
} from '$common/contentful';

const client = buildClient();

const Careers = () => {
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
        content_type: 'careersPage',
      })
      .then((entry) => {
        entry.items.sort(sortByOrder);
        setPageContent(entry.items);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <PageTitle title="Covenant Eye Care Careers" />
      <div className="container">
        <div className="row">
          {
            pageContent && (
              pageContent.map((content) => (
                <div className="col-md-10 col-lg-8 mb-5" key={content.fields.title}>
                  <h2
                    className="section-heading"
                  >
                    {content.fields.title}
                  </h2>
                  <ReactMarkdown>
                    { content.fields.description }
                  </ReactMarkdown>
                  <a
                    className="cta"
                    href={content.fields.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              ))
            )
          }
        </div>
      </div>
    </>
  );
};

Careers.defaultProps = {

};

Careers.propTypes = {

};

export default Careers;
