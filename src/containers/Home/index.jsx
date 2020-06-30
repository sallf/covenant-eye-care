import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './index.scss';

import Hero from './Hero';
import Services from './Services';
import Contact from './Contact';

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
      <div className="container">
        <div className="row section">
          <div className="col-12 text-center">
            <h2 className="section-heading">Our Providers</h2>
          </div>
          <div className="col-12 col-sm-4 text-center mb-4">
            <img src="<?php echo IMG_DIR ?>/providers-bryan_allf-md.jpg" className="providers-img" alt="" />
            <p className="container-heading mb-0 mt-2">Dr. Bryan Allf, MD</p>
            <p>Ophthalmologist</p>
          </div>
          <div className="col-12 col-sm-7 align-self-center mb-5">
            <a href="providers#drAllf">Learn More</a>
          </div>
          <div className="col-12 col-sm-4 text-center mb-4">
            <img src="<?php echo IMG_DIR ?>/providers-richard_akers-md.jpg" className="providers-img" alt="" />
            <p className="container-heading mb-0 mt-2">Dr. Richard Akers, MD</p>
            <p>Ophthalmologist</p>
          </div>
          <div className="col-12 col-sm-7 align-self-center mb-5">
            <a href="providers#drAkers">Learn More</a>
          </div>
          <div className="col-12 col-sm-4 text-center mb-4">
            <img src="<?php echo IMG_DIR ?>/providers-farnham.jpg" className="providers-img" alt="" />
            <p className="container-heading mb-0 mt-2">Dr. Farnham</p>
            <p>Optometrist</p>
          </div>
          <div className="col-12 col-sm-7 align-self-center mb-5">
            <a href="providers#drFarnham">Learn More</a>
          </div>
          <div className="col-12 col-sm-4 text-center mb-4">
            <img src="<?php echo IMG_DIR ?>/providers-canizales.jpg" className="providers-img" alt="" />
            <p className="container-heading mb-0 mt-2">Dr. Canizales</p>
            <p>Optometrist</p>
          </div>
          <div className="col-12 col-sm-7 align-self-center mb-5">
            <a href="providers#drCanizales">Learn More</a>
          </div>
          <div className="col-12 text-center mb-4">
            <h2 className="section-heading">Reviews</h2>
            <div className="embed-responsive">
              <iframe src="https://reviews.solutionreach.com/vs/reviews/covenant_eye_care_gastonia?limit=10" frameBorder="0" scrolling="no" className="embed-responsive-item" />
              <div className="reviews-btn-wrapper">
                <a className="cta" href="https://reviews.solutionreach.com/vs/covenant_eye_care_gastonia" target="_blank">
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.defaultProps = {

};

Home.propTypes = {

};

export default Home;
