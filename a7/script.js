function calculate() {
    var a = parseFloat(document.getElementById("num1").value);
    var b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    var add = a + b;
    var sub = a - b;
    var mul = a * b;
    var div = b !== 0 ? (a / b).toFixed(2) : "Cannot divide by zero";

    document.getElementById("result").innerHTML =
        "Addition: " + add + "<br>" +
        "Subtraction: " + sub + "<br>" +
        "Multiplication: " + mul + "<br>" +
        "Division: " + div;
}
