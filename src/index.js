import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Big from 'big.js';

const squareRootOfTwo = new Big(1.414213);
const simpleMessage = `The square root of the number 2 rounded to 6 decimals is: ${squareRootOfTwo}`;

ReactDOM.render(
  <h3>{simpleMessage}</h3>,
  document.getElementById('root'),
);
