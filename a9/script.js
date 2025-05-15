function submitForm() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    document.getElementById('output').innerText = `Email: ${email}, Password: ${password}`;

    console.log("Email:", email);
    console.log("Password:", password);
}
