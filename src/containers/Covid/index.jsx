import React, { useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import styles from './index.scss';

import PageTitle from '$components/PageTitle';

import { useMountEffect } from '$common/hooks';
import {
  buildClient,
  sortByOrder,
  renderLongTextParagraphs,
} from '$common/contentful';

const client = buildClient();

const img1 = require('$images/covid/covenant-covid-response-1.png');
const img2 = require('$images/covid/covenant-covid-response-2.png');
const img3 = require('$images/covid/covenant-covid-response-3.png');
const img4 = require('$images/covid/covenant-covid-response-4.png');

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

const Covid = () => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [pageContent, setPageContent] = useState(null);
  const [covidBoxes, setCovidBoxes] = useState(null);

  // --------------------- ===
  //  EFFECTS
  // ---------------------
  useMountEffect(() => {
    client
      .getEntries({
        content_type: 'covidPage',
      })
      .then((entry) => {
        entry.items.sort(sortByOrder);
        setPageContent(entry.items);
      })
      .catch((err) => console.log(err));
  });

  useMountEffect(() => {
    client
      .getEntries({
        content_type: 'covidBoxes',
      })
      .then((entry) => {
        entry.items.sort(sortByOrder);
        setCovidBoxes(entry.items);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <PageTitle title="Covenant Eye Care COVID Notice" />
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
                </div>
              ))
            )
          }
        </div>
        <h2
          className="section-heading"
        >
          Here&#39;s what to expect
        </h2>
        <div className="row">
          <div className={`col-12 col-md-6 ${styles.box}`}>
            <div className={`row ${styles.row} ${styles.row__blue}`}>
              <div className="col-4">
                <img src={img1} alt="" />
              </div>
              <div className="col-8">
                <p className={`text-lg text-bold ${styles.headline}`}>We care about your safety</p>
                <p>Upon arrival you’ll have your temperature taken by a Caromont Health employee. Next, ring our doorbell. A covenant staff member will have you sanitize your hands and don your mask. We’ll ask you some screening questions to make sure you’re symptom-free.</p>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-6 ${styles.box} ${styles.box__gray} ${styles.box2}`}>
            <div className={`row ${styles.row} ${styles.row__gray}`}>
              <div className="col-4">
                <img src={img2} alt="" />
              </div>
              <div className="col-8">
                <p className={`text-lg text-bold ${styles.headline}`}>Keep your distance</p>
                <p>Patients should come alone, unless they are a minor or assistance is needed. We’ve marked spots on the floor and limited the number of chairs in the office to keep you a safe distance from other patients. If your exam room is not ready when you arrive, we may ask you to wait in your car.</p>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-6 ${styles.box}`}>
            <div className={`row ${styles.row} ${styles.row__blue}`}>
              <div className="col-4">
                <img src={img3} alt="" />
              </div>
              <div className="col-8">
                <p className={`text-lg text-bold ${styles.headline}`}>Be confident</p>
                <p>While a hug or a handshake is out of the question, you can be confident that we are adhering to the highest standards of cleaning and sterilizing, going above and beyond even what the CDC recommends to keep you safe.</p>
              </div>
            </div>
          </div>
          <div className={`col-12 col-md-6 ${styles.box} ${styles.box__gray}`}>
            <div className={`row ${styles.row} ${styles.row__gray}`}>
              <div className="col-4">
                <img src={img4} alt="" />
              </div>
              <div className="col-8">
                <p className={`text-lg text-bold ${styles.headline}`}>Our covenant and commitment</p>
                <p>We’ve made a covenant — an enduring promise — to care for you and your eyes as if you are part of our family. That’s why we’ve been open for urgent cases since the shut-down began. As we return to routine care, we’ll continue to deliver the very best in eye care and that’s a promise you can count on.</p>
              </div>
            </div>
          </div>
        </div>
        <h2
          className="section-heading"
        >
          What we want you to know
        </h2>
        <div className="row mb-4">
          {
            covidBoxes && (
              covidBoxes.map((box) => (
                <div className={`col-12 col-md-6 col-lg-4 ${styles.promiseBox} ${styles[`promiseBox__${box.fields.color}`]}`}>
                  <p className={styles.promiseCount}>{box.fields.order}</p>
                  <p className="text-lg text-bold">{box.fields.headline}</p>
                  {renderLongTextParagraphs(box.fields.content)}
                </div>
              ))
            )
          }
        </div>
      </div>
    </>
  );
};

Covid.defaultProps = {

};

Covid.propTypes = {

};

export default Covid;
