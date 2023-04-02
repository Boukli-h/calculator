let result = document.getElementById('result');

function addToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function deleteCharacter() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
    let expression = result.value;
    // Evaluate expressions inside parentheses first
    while (expression.indexOf('(') !== -1) {
      let openingIndex = expression.lastIndexOf('(');
      let closingIndex = expression.indexOf(')', openingIndex);
      if (closingIndex === -1) {
        // Missing closing parenthesis
        return;
      }
      let subExpression = expression.slice(openingIndex + 1, closingIndex);
      let subResult = eval(subExpression);
      expression = expression.slice(0, openingIndex) + subResult + expression.slice(closingIndex + 1);
    }
    // Evaluate the rest of the expression
    let finalResult = eval(expression);
    result.value = finalResult;
  }
  
document.addEventListener('keydown', function(event) {
    if (event.key >= 0 && event.key <= 9) {
      addToResult(event.key);
    } else if (event.key === '.') {
      addToResult('.');}
      else if (event.key === '(') {
        addToResult('(');
    }   else if (event.key === ')') {
        addToResult(')');
    }
    else if (event.key === '+') {
      addToResult('+');
    } else if (event.key === '-') {
      addToResult('-');
    } else if (event.key === '*') {
      addToResult('*');
    } else if (event.key === '/') {
      addToResult('/');
    } else if (event.key === 'Enter') {
      calculateResult();
    } else if (event.key === 'Backspace') {
      deleteCharacter();
    }
  });
  