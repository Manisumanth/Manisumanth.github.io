const calculate = (operator) => {
  const num1 = parseFloat(document.getElementById("n1").value);
  const num2 = parseFloat(document.getElementById("n2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "enter valid numbers.";
  } else {
    switch (operator) {
      case '+':
        result = `Addition: ${num1 + num2}`;
        break;
      case '-':
        result = `Subtraction: ${num1 - num2}`;
        break;
      case '*':
        result = `Multiplication: ${num1 * num2}`;
        break;
      case '/':
        result = num2 !== 0 ? `Division: ${num1 / num2}` : "Cannot divide by zero.";
        break;
    }
  }

  document.getElementById("result").innerText = result;
};