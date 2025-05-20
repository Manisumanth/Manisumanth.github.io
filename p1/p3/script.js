const customerData = {
  "1234567890": { pin: "1234", balance: 0, name: "John" },
  "1234567891": { pin: "2345", balance: 0, name: "Cathy" },
};

function showLoginPage() {
  document.body.innerHTML = `
    <div class="atm-container">
      <h1>ATM lOGIN</h1>
      <input type="text" id="card" placeholder="Card Number" />
      <input type="password" id="pin" placeholder="PIN" />
      <button onclick="authenticate()">Login</button>
      <div id="loginError" class="error"></div>
    </div>
  `;
}

function authenticate() {
  const card = document.getElementById("card").value;
  const pin = document.getElementById("pin").value;
  const feedback = document.getElementById("loginError");

  if (customerData[card] && customerData[card].pin === pin) {
    loadDashboard(card);
  } else {
    feedback.textContent = "Invalid card number or PIN!";
  }
}

function loadDashboard(card) {
  const client = customerData[card];
  document.body.innerHTML = `
    <div class="welcome-screen">
      <h1>Welcome, ${client.name} !</h1>
      <div class="options-panel">
        <label>Select Action & Enter Amount:</label>
        <div class="action-row">
          <select id="task">
            <option value="">--Choose--</option>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
          <input type="number" id="cash" placeholder="Enter Amount" />
        </div>
        <button onclick="process('${card}')">Submit</button>
        <button class="exit-btn" onclick="showLoginPage()">Home</button>
        <div id="resultMessage" class="result-msg"></div>
      </div>
    </div>
  `;
}

function process(card) {
  const client = customerData[card];
  const task = document.getElementById("task").value;
  const amount = parseFloat(document.getElementById("cash").value);
  const result = document.getElementById("resultMessage");

  if (!task || isNaN(amount) || amount <= 0) {
    result.textContent = "Please select an action and enter a valid amount.";
    return;
  }

  if (task === "deposit") {
    client.balance += amount;
    result.textContent = `Deposited ₹${amount}. New Balance: ₹${client.balance}`;
  } else if (task === "withdraw") {
    if (client.balance >= amount) {
      client.balance -= amount;
      result.textContent = `Withdrew ₹${amount}. Remaining Balance: ₹${client.balance}`;
    } else {
      result.textContent = "Insufficient balance!";
    }
  }
}
showLoginPage();
