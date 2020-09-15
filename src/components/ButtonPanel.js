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
  const panelTag = [];
  Object.keys(panelKeys).forEach(key => {
    panelTag.push(
      <div key={`row_${key}`}>
        {
          panelKeys[key].map(btn => (
            <Button
              key={`btn_${btn}`}
              buttonName={btn}
            />
          ))
        }
      </div>,
    );
  });

  return (
    <div>
      {panelTag}
    </div>
  );
};

export default ButtonPanel;
