const customerData = {
  "1234567890": { pin: "1234", balance: 10000, name: "John" },
  "1234567891": { pin: "2345", balance: 5000, name: "Cathy" },
};

function showLoginPage() {
  document.body.innerHTML = `
    <div class="atm-container">
      <h1>ATM Login</h1>
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
      <h1>Welcome, ${client.name}</h1>
      <div id="balanceDisplay">Current Balance: ₹${client.balance}</div>
      <div class="options-panel">
        <label>Select Action & Enter Amount:</label>
        <div class="action-row">
          <select id="task" onchange="toggleTransferInput('${card}')">
            <option value="">--Choose--</option>
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
            <option value="transfer">Transfer</option>
          </select>
          <input type="number" id="cash" placeholder="Enter Amount" />
          <input type="text" id="targetCard" placeholder="Target Card Number" style="display:none;" />
        </div>
        <button onclick="process('${card}')">Submit</button>
        <button class="exit-btn" onclick="showLoginPage()">Home</button>
        <div id="resultMessage" class="result-msg"></div>
      </div>
    </div>
  `;
}

function toggleTransferInput(card) {
  const task = document.getElementById("task").value;
  const targetCardInput = document.getElementById("targetCard");
  targetCardInput.style.display = (task === "transfer") ? "inline-block" : "none";
}

function updateBalanceDisplay(card) {
  const client = customerData[card];
  const balanceDisplay = document.getElementById("balanceDisplay");
  if (balanceDisplay) {
    balanceDisplay.textContent = `Current Balance: ₹${client.balance}`;
  }
}

function process(card) {
  const client = customerData[card];
  const task = document.getElementById("task").value;
  const amount = parseFloat(document.getElementById("cash").value);
  const result = document.getElementById("resultMessage");
  const targetCard = document.getElementById("targetCard")?.value;

  if (!task || isNaN(amount) || amount <= 0) {
    result.textContent = "Please select an action and enter a valid amount.";
    return;
  }

  if (task === "deposit") {
    client.balance += amount;
    result.textContent = `Deposited ₹${amount}.`;
    updateBalanceDisplay(card);
  } else if (task === "withdraw") {
    if (client.balance >= amount) {
      client.balance -= amount;
      result.textContent = `Withdrew ₹${amount}.`;
      updateBalanceDisplay(card);
    } else {
      result.textContent = "Insufficient balance!";
    }
  } else if (task === "transfer") {
    if (!targetCard || !customerData[targetCard] || targetCard === card) {
      result.textContent = "Enter a valid target card number (not your own).";
      return;
    }
    if (client.balance >= amount) {
      client.balance -= amount;
      customerData[targetCard].balance += amount;
      result.textContent = `Transferred ₹${amount} to ${customerData[targetCard].name}.\n` +
        `${client.name}'s New Balance: ₹${client.balance}\n` +
        `${customerData[targetCard].name}'s New Balance: ₹${customerData[targetCard].balance}`;
      updateBalanceDisplay(card);
    } else {
      result.textContent = "Insufficient balance for transfer!";
    }
  }
}
showLoginPage();

