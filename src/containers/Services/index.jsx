import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import PageTitle from '$components/PageTitle';

import { useMountEffect } from '$common/hooks';
import {
  buildClient,
  sortByOrder,
} from '$common/contentful';

const client = buildClient();

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      let hasIframe = false;
      node.content.forEach((elem) => {
        if (elem.nodeType === INLINES.HYPERLINK) {
          hasIframe = true;
        }
      });
      if (hasIframe) {
        return children;
      }
      return <p>{children}</p>;
    },
    [INLINES.HYPERLINK]: (node) => {
      if (node.data.uri.includes('facebook.com/plugins/video.php')) {
        return (
          <div className="row">
            <div className="col-8 col-md-6 mb-3">
              <div className="embed-responsive embed-responsive-4by3">
                <iframe
                  title="cataracts"
                  className="embed-responsive-item"
                  src={node.data.uri}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        );
      }
      // Else
      return (
        <a
          href={node.data.uri}
        >
          {node.content[0].value}
        </a>
      );
    },
  },
};

const Services = () => {
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
        content_type: 'servicesPage',
      })
      .then((entry) => {
        entry.items.sort(sortByOrder);
        setPageContent(entry.items);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <PageTitle title="Covenant Eye Care Services" />
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
                    documentToReactComponents(content.fields.content, options)
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

Services.defaultProps = {

};

Services.propTypes = {

};

export default Services;
