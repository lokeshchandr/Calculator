const display = document.getElementById("display");

function appendToDisplay(input) {
  if(display.value === "ERROR")
  {
    display.value =" ";
  }
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value); //evel: calculate the value
  } catch(error) {
    display.value = "ERROR";
  
  }
}
function clearDisplay() {
  display.value = "";
}
