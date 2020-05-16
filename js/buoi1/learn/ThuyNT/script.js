function calc() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  const result = document.getElementById("result");

  if (operator == "+") {
    result.innerHTML = num1 + num2;
  } else if (operator == "-") {
    result.innerHTML = num1 - num2;
  } else if (operator == "*") {
    result.innerHTML = num1 * num2;
  } else if (operator == "/") {
    result.innerHTML = num1 / num2;
  }
}
