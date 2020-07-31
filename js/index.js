const display = document.querySelector('.display');

document
  .querySelectorAll('.digits button')
  .forEach((button) => button.addEventListener('click', digitPressed));

function digitPressed(ev) {
  const digit = ev.target.innerText;
  display.value += digit;
}

document
  .querySelectorAll('.opers button')
  .forEach((button) => button.addEventListener('click', operPressed));

function operPressed(ev) {
  const oper = ev.target.innerText;
  display.value += oper;
}

document
  .querySelector('.opers button.square-root')
  .addEventListener('click', squareRootPressed);

function squareRootPressed(ev) {
  const squareRoot = ev.target.innerText;
  display.value = Math.sqrt(display.value);
}

document.querySelector('.eq').addEventListener('click', eqPressed);

function eqPressed() {
  display.value = eval(display.value);
}

document.querySelector('.clear').addEventListener('click', clearPressed);

function clearPressed(e) {
  const clear = e.target.innerText;
  display.value = ' ';
}

document
  .querySelector('.clear-empty')
  .addEventListener('click', clearEmptyPressed);

function clearEmptyPressed(e) {
  const ce = e.target.innerText;
  display.value = display.value.substring(0, display.value.length - 1);
}

document.querySelector('.point').addEventListener('click', pointPressed);

function pointPressed(ev) {
  const point = ev.target.innerText;
  display.value += point;
}
