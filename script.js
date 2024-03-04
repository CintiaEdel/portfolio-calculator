let input = "";
let operand = "";

function updateDisplay() {
  document.getElementById("current").innerHTML = input;
  document.getElementById("previous").innerHTML = operand;
}

function numberInput(value) {
  input += value;
  updateDisplay();
}

function clearAllDisplay() {
  input = "";
  operand = ""
  updateDisplay();
}

function clearDisplay() {
  input = "";
  updateDisplay();
}

function deleteLastNumber() {
  input = input.slice(0,-1);
  updateDisplay();
}

function operatorInput(value) {
  operand = input + value;
  input = "";
  updateDisplay();
}

function equalsTo() {
  if (input && operand !== "") {
    operand = operand + input;
    input = eval(operand);
    updateDisplay();
    operand = "";
  }
}
