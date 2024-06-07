function clearDisplay() {
  document.getElementById("calculator-display").value = "";
}

function deleteChar() {
  const display = document.getElementById("calculator-display");
  display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
  const display = document.getElementById("calculator-display");
  display.value += value;
}


function calculateResult() {
  const display = document.getElementById("calculator-display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

