import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>We are sorry. Something went wrong.</h1>;
    }

    return children
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.object.isRequired,
};
