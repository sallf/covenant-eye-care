import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
  render() {
    const { type, children } = this.props;
    return (
      <div className={`alert alert-${type} mb-0`} role="alert">
        { children }
      </div>
    );
  }
}

Alert.defaultProps = {

};

Alert.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]).isRequired,
  children: PropTypes.node.isRequired,
};

export default Alert;
