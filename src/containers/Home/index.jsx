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
                  Why choose Covenant Eye Care?
                </h2>
                <p className="text-lg">Vision problems aren&#39;t the only reason to visit an eye doctor. Did you know that many serious health problems can first be detected only in the eyes? Diabetes, high blood pressure, even stroke can be discovered during a thorough eye exam. At Covenant Eye Care, our five highly trained doctors provide personalized care and have made a promise – a covenant – to do everything possible to preserve your eyesight for the whole of your life. Because we take our time and because we care deeply about our patients, we&#39;ve developed lifelong friendships with them and their families. At Covenant Eye Care, you&#39;re a name, not a number.</p>
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
