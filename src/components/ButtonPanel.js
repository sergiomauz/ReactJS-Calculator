import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const handleClick = buttonName => {
    props.clickHandler(buttonName);
  };

  const panelKeys = {
    1: ['AC', '+/-', '%', '÷'],
    2: ['7', '8', '9', 'X'],
    3: ['4', '5', '6', '-'],
    4: ['1', '2', '3', '+'],
    5: ['0', '.', '='],
  };
  const panelTags = [];

  Object.keys(panelKeys).forEach(key => {
    panelTags.push(
      <div className="btnRow" key={`row_${key}`}>
        {
          panelKeys[key].map((btn, index) => (
            <Button
              clickHandler={handleClick}
              key={`btn_${btn}`}
              buttonName={btn}
              wide={btn === '0'}
              color={index !== panelKeys[key].length - 1 ? 'bg-lightgray' : 'bg-orange'}
            />
          ))
        }
      </div>,
    );
  });

  return (
    <div className="button-panel">
      {panelTags}
    </div>
  );
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

export default ButtonPanel;
