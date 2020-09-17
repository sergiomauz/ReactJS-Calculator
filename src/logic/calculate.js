import Operate from './operate';

const calculate = (calculatorData, buttonName) => {
  const { total, next, operation } = calculatorData;
  let tempOperation = 0;

  if (buttonName === '+/-') {
    if (operation) {
      return {
        total,
        next: Operate(next, -1, 'x').toString(),
        operation,
      };
    }

    return {
      total: Operate(total, -1, 'x').toString(),
      next,
      operation,
    };
  }

  if (buttonName === '%') {
    if (operation) {
      tempOperation = Operate(total, next, operation);
      return {
        total: Operate(tempOperation, 100, '÷').toString(),
        next: null,
        operation: null,
      };
    }

    tempOperation = Operate(total, 100, '÷');
    return {
      total: tempOperation.toString(),
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
        total: Operate(total, next, operation).toString(),
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
      total: Operate(total, next, operation),
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
