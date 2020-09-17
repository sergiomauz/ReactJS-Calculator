import Big from 'big.js';
import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  const { total, next, operation } = calculatorData;

  if (buttonName === '+/-') {
    if (operation) {
      return {
        total,
        next: (Big(next).times(-1)).toString(),
        operation,
      };
    }

    return {
      total: (Big(total).times(-1)).toString(),
      next,
      operation,
    };
  }

  if (buttonName === '%') {
    if (operation) {
      return {
        total: (Big(operate(total, next, operation)).div(100)).toString(),
        next: null,
        operation: null,
      };
    }

    return {
      total: (Big(total).div(100).toString()),
      next,
      operation,
    };
  }

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '=') {
    if (operation) {
      return {
        total: (parseFloat(operate(total, next, operation))).toString(),
        next,
        operation: null,
      };
    }

    return {
      total,
      next,
      operation,
    };
  }

  if (buttonName && total && next) {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: buttonName,
    };
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
