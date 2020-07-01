import React from 'react';
import styles from './index.scss';

import Hero from './Hero';
import Services from './Services';
import Contact from './Contact';
import Providers from './Providers';
import Reviews from './Reviews';

const subheroImg = require('$images/hp-subhero.jpg');

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Hero />
        <div className="row section">
          <div className="col-4 d-none d-md-block">
            <img src={subheroImg} alt="" />
          </div>
          <div className="col-12 col-md-8">
            <div className={styles.mission}>
              <div>
                <h2 className={styles.missionHeader}>
                  <span className="intro-triangle">
                    <svg viewBox="0 0 25 36">
                      <g>
                        <polygon points="0 0 25 18 0 36 0 0" />
                      </g>
                    </svg>
                  </span>
                  Attentive Eye Exams, Surgery and Optics
                </h2>
                <p className="text-lg">We have been caring for our patients’ eyes for over 50 years. As a smaller practice, we are able to provide the highest quality eye care in a setting that is friendly and personal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <Contact />
      <Providers />
      <Reviews />
    </div>
  );
}

Home.defaultProps = {

};

Home.propTypes = {

};

export default Home;
