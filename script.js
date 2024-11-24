const display = document.getElementById("display");

function appendToDisplay(input) {
  if (display.value === "ERROR") {
    display.value = " ";
  }
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value); //evel: calculate the value
  } catch (error) {
    display.value = "ERROR";
  }
}
function clearDisplay() {

  display.value = "0";
}
function deletee() {
  if (display.value != 0) {
    display.value = display.value.slice(0, -1);
  }
}
