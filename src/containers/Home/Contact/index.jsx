import React, { useState, useRef, useLayoutEffect } from 'react';

import styles from './index.scss';

const Contact = () => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [currentTab, setCurrentTab] = useState('contact');
  const [boxHeight, setBoxHeight] = useState('100%');

  const contactBox = useRef();
  const locationBox = useRef();

  useLayoutEffect(() => {
    const height = Math.max(contactBox.current.clientHeight, locationBox.current.clientHeight);
    setBoxHeight(`${height}px`);
  }, []);

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={`${styles.wrapper} section`}>
      <div className="container">
        <div className="row">
          <div className={`col-12 col-md-5 offset-md-7 ${styles.container}`}>
            <ul className={styles.tabContainer} role="tablist" id="contactTabContainer">
              <li
                className={`${styles.tab} ${currentTab === 'contact' ? styles.tab__selected : ''}`}
                id="contactTab1"
                role="tab"
                onClick={() => setCurrentTab('contact')}
                onKeyDown={() => setCurrentTab('contact')}
              >
                <svg viewBox="0 0 64.4 64.41"><g><g><path d="M50.81,64.41c-12.35,0-25.11-5.69-35-15.6l-.2-.21h0C5.31,38.24-.29,25.22,0,12.67l0-.93L.61,11A34.27,34.27,0,0,1,3.29,8,33.85,33.85,0,0,1,15,.32,5,5,0,0,1,16.85,0c1.49,0,4.85.76,5.71,3.11C24.08,7.32,26,12.8,27.38,18c.38,1.47,0,5-2.05,6.33l-4.9,3.11a3.69,3.69,0,0,0,.66,1.68,69.11,69.11,0,0,0,6.55,7.67,68.29,68.29,0,0,0,7.61,6.48,2.77,2.77,0,0,0,1.53.58l1.69-2.37L40,39.07C41.4,37,44.8,36.9,45.18,36.9a4.87,4.87,0,0,1,1.08.11,69.72,69.72,0,0,1,15.23,4.91c2.19,1,3.57,5,2.59,7.45a33.69,33.69,0,0,1-7.64,11.74,34.43,34.43,0,0,1-3.06,2.69l-.72.57-1.85,0ZM5.55,13.72c0,10.71,5.22,22.22,14,31l.27.27c8.77,8.77,20.06,13.85,30.9,13.9.64-.54,1.26-1.1,1.84-1.67a28.26,28.26,0,0,0,6.38-9.82s-.14-.36-.25-.63A65,65,0,0,0,45,42.42a5.78,5.78,0,0,0-.65.14L41.61,47c-1.73,2.81-6.33,3.26-9.63.84a73.66,73.66,0,0,1-8.26-7,75.42,75.42,0,0,1-7.1-8.32,7.85,7.85,0,0,1-1.52-6.07,5.34,5.34,0,0,1,2.39-3.58L21.86,20a3,3,0,0,0,.11-.77C20.76,14.7,19,9.69,17.61,5.7a2.51,2.51,0,0,0-.75-.16,28.35,28.35,0,0,0-9.64,6.34c-.56.57-1.12,1.17-1.67,1.84Z"/></g></g></svg>
                <span className="container-heading">Contact</span>
              </li>
              <li
                className={`${styles.tab} ${currentTab === 'location' ? styles.tab__selected : ''}`}
                id="contactTab2"
                role="tab"
                onClick={() => setCurrentTab('location')}
                onKeyDown={() => setCurrentTab('location')}
              >
                <svg viewBox="0 0 63.51 75.11"><g><g><path d="M31.76,75.11a3.09,3.09,0,0,1-2-.74C26.7,71.78,0,48.53,0,31.75a31.76,31.76,0,0,1,63.51,0c0,16.78-26.7,40-29.75,42.62a3.08,3.08,0,0,1-2,.74Zm0-68.92A25.59,25.59,0,0,0,6.19,31.75c0,10.88,16.91,28.35,25.56,36.14,8.65-7.79,25.56-25.26,25.56-36.14A25.59,25.59,0,0,0,31.76,6.19Z"/><path d="M31.76,47.24A15.49,15.49,0,1,1,47.24,31.75,15.51,15.51,0,0,1,31.76,47.24Zm0-24.78A9.29,9.29,0,1,0,41,31.75a9.3,9.3,0,0,0-9.29-9.29Z"/></g></g></svg>
                <span className="container-heading" id="ariaLocation">Location</span>
              </li>
            </ul>
            <div className={styles.infoContainer} id="infoContainer">
              <div
                className={`${styles.info} ${currentTab === 'contact' ? styles.info__active : ''}`}
                id="infoTab1"
                role="tabpanel"
                aria-labelledby="contactTab1"
                ref={contactBox}
                style={{
                  minHeight: boxHeight,
                }}
              >
                <h2 className="text-center text-xl">Contact Us</h2>
                <p className="container-heading">(704) 864-7789</p>
                <p><strong>Fax:</strong> (704) 864-4884</p>
              </div>
              <div
                className={`${styles.info} ${currentTab === 'location' ? styles.info__active : ''}`}
                id="infoTab2"
                role="tabpanel"
                aria-labelledby="contactTab2"
                ref={locationBox}
                style={{
                  minHeight: boxHeight,
                }}
              >
                <h3 className="text-center text-xl">Find Us</h3>
                <address>
                  <p className="text-md ml-2 container-heading" translate="no" aria-labelledby="ariaLocation">
                    2555 Court Dr # 150
                    <br />
                    Gastonia, NC 28054
                  </p>
                  <p className="text-sm">
                    We are located on the first floor of the Gaston Professional Center off of Court Dr.
                  </p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.defaultProps = {

};

Contact.propTypes = {

};

export default Contact;
