import React from 'react';
import PropTypes from 'prop-types';
import styles from '../assets/scss/modules/containers/home.module.scss';

function Home() {
  console.log('S', styles);
  return (
    <div className="container">
      <div className={styles.bg}>hi</div>
    </div>
  );
}

Home.defaultProps = {

};

Home.propTypes = {

};

export default Home;
