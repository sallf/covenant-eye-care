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
const crossLogo = require('$images/optical-cross.svg');

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
                  {
                    // Yeah hacks already!
                    content.fields.id === 'eyewearCenter' && (
                      <>
                        <h3>No vision insurance? No problem.</h3>
                        <img src={crossLogo} className="icon-xl" alt="" />
                        <p>Optical Cross is our new vision care savings program!</p>
                        <p><b>Enrollment Fees</b></p>
                        <ul>
                          <li><p>Individual ........ $30</p></li>
                          <li><p>Couple ............ $50</p></li>
                          <li><p>Family ............. $70</p></li>
                        </ul>
                        <p>Children&#39;s exams only $99 with family enrollment.</p>
                        <p><b>Other Benefits</b></p>
                        <ul>
                          <li><p>No limit on the number of times you can access savings throughout the year.</p></li>
                          <li><p>Thirty (30) day unconditional guarantee on glasses and contact lenses.</p></li>
                          <li><p>24 hour emergency eye care services.</p></li>
                        </ul>
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
                        <p>*Limited exclusions apply.</p>
                        <p>**May not be combined with any other insurance.</p>
                        <p><b>Value Eyewear Packages</b></p>
                        <ul>
                          <li><p>Single Vision .................................... $149</p></li>
                          <li><p>Bifocals ............................................ $199</p></li>
                          <li><p>Trifocals ........................................... $219</p></li>
                          <li><p>Progressive No-line Multifocals ...... $299</p></li>
                        </ul>
                      </>
                    )
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
