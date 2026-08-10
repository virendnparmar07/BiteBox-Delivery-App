function login()
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    const Validemail = "admin@gmail.com";
    const Validpassword = "12345";
    // Simple Condition

    if(email === Validemail && password === Validpassword){
        error.innerText = " ";
        alert("Login Successful");

    }else {
        error.innerText = "Invalid email or password";
    }
}

function togglePassword() {
    let password = document.getElementById("password");
    let icon = document.getElementById("togglePassword");

    if(password.type === "password") {
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");

    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function toggleMenu() {
    let menu = document.getElementById("navMenu");
    let icon = document.getElementById("menuIcon");

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
}