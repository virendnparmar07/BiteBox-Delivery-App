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