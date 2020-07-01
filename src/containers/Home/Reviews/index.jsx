import React from 'react';

const Reviews = () => {
  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h2 className="section-heading">Reviews</h2>
          <div className="embed-responsive">
            <iframe
              title="reviews"
              src="https://reviews.solutionreach.com/vs/reviews/covenant_eye_care_gastonia?limit=10"
              frameBorder="0"
              scrolling="no"
              className="embed-responsive-item"
            />
            <div className="reviews-btn-wrapper">
              <a
                className="cta"
                href="https://reviews.solutionreach.com/vs/covenant_eye_care_gastonia"
                target="_blank"
                rel="noopener noreferrer"
              >
                See More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Reviews.defaultProps = {

};

Reviews.propTypes = {

};

export default Reviews;
