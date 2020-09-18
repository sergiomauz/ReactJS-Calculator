import Operate from './operate';

const calculate = (calculatorData, buttonName) => {
  // eslint-disable-next-line
  let { total, next, operation } = calculatorData;
  const operationTypes = ['+', '-', '÷', 'x'];
  let tempOperation = 0;

  const isAnOperation = operator => operationTypes.includes(operator);

  if (buttonName === '+/-') {
    if (operation) {
      return {
        total,
        next: Operate(next, -1, 'x'),
        operation,
      };
    }

    return {
      total: Operate(total, -1, 'x'),
      next,
      operation,
    };
  }

  if (buttonName === '%') {
    if (operation) {
      tempOperation = Operate(total, next, operation);
      return {
        total: Operate(tempOperation, 100, '÷'),
        next: null,
        operation: null,
      };
    }

    tempOperation = Operate(total, 100, '÷');
    return {
      total: tempOperation,
      next,
      operation,
    };
  }

  if (buttonName === 'AC') {
    if (next && operation) {
      return {
        total,
        next: '0',
        operation,
      };
    }
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '=') {
    if (operation) {
      return {
        total: Operate(total, next, operation),
        next: null,
        operation: null,
      };
    }

    return {
      total,
      next,
      operation,
    };
  }

  if (isAnOperation(buttonName) && total && !operation) {
    return {
      total,
      next,
      operation: buttonName,
    };
  }

  if (isAnOperation(buttonName) && total && operation) {
    return {
      total: Operate(total, next, operation),
      next: null,
      operation: buttonName,
    };
  }

  if (buttonName.match(/\d/)) {
    if (!operation) {
      if (!total || total === '0' || total === 'Error') {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else if (!next || next === '0') {
      next = buttonName;
    } else {
      next += buttonName;
    }

    return {
      total,
      next,
      operation,
    };
  }

  if (buttonName === '.' && (total || next)) {
    if (!next && !total.includes('.')) {
      total += '.';
      return {
        total,
        next,
        operation,
      };
    } if (!next.includes('.')) {
      next += '.';
      return {
        total,
        next,
        operation,
      };
    }
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
