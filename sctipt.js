let calc = document.querySelector('.calculator'),
    calcTable = calc.querySelector('.table'),
    calcOutput = calc.querySelector('.calc-input'),
    clearBtn = calc.querySelector('.calc-button');

const pushToString = (elem, text) => {
  elem.innerHTML = elem.innerHTML + text;
  return elem.innerHTML;
};

const countString = string => {
  return eval(string);
};

calcTable.addEventListener('click', event => {
  if (event.target.classList.contains('table-cell')) {
    let text = event.target.textContent;
    if (text !== '=') {
      pushToString(calcOutput, text);
    }
    if (text === '=') {
      let result = countString(calcOutput.textContent);
      clearString(calcOutput)
      pushToString(calcOutput, result);
    }
  }
});

const clearString = elem => {
  elem.innerHTML = '';
};

clearBtn.addEventListener('click', () => {
  clearString(calcOutput);
});
