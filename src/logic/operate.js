import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const nOne = Big(numberOne);
  const nTwo = Big(numberTwo);

  switch (operation) {
    case '÷':
      if (numberTwo === '0') {
        return 'error';
      }
      return nOne.div(nTwo).toString();
    case 'x':
      return nOne.times(nTwo).toString();
    case '-':
      return nOne.minus(nTwo).toString();
    case '+':
      return nOne.plus(nTwo).toString();
    default:
      return 'error';
  }
};

export default operate;
