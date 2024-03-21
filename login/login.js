const loginForm = document.getElementById("login-form1");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if ((username === "rajX03" || username==="12345678") && password === "Raj@0211") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("Invalid Username or Password!")
    }
})