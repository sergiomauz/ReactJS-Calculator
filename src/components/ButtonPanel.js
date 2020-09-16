import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
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

export default ButtonPanel;
