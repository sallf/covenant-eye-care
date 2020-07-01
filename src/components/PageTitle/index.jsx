import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

const PageTitle = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    title,
  } = props;

  return (
    <>
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-xxl">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="down-triangle">
          <svg viewBox="0 0 26 36"><g><polygon points="0 0 26 0 13 13 0 0" /></g></svg>
        </div>
      </div>
    </>
  );
};

PageTitle.defaultProps = {

};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
