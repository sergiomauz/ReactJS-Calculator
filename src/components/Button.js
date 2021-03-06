import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const handleClick = e => {
    e.stopPropagation();
    props.clickHandler(e.target.id);
  };
  const { buttonName, wide, color } = props;
  let buttonStyles = '';

  if (wide) {
    buttonStyles += 'wide button';
  } else {
    buttonStyles += 'small button';
  }
  buttonStyles += ` ${color}`;

  return (
    <button
      id={buttonName}
      onClick={handleClick}
      type="button"
      key={`key_${buttonName}`}
      className={buttonStyles}
    >
      {buttonName}
    </button>
  );
};

Button.defaultProps = {
  buttonName: '',
  wide: false,
  color: 'orange',
  clickHandler: null,
};
Button.propTypes = {
  buttonName: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Button;
