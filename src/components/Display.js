import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;

  return (
    <div className="display-container">
      <h2>{result || '0'}</h2>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
