function usernameValidation() {
    let username = document.forms.loginform.username.value;
    if (username=="") {
        window.alert("Username cannot be empty");
    }
}
function passwordValidation() {
    let password = document.forms.loginform.username.value;
    if (password =="") {
        window.alert("Password cannot be empty");
    }
}

function emailValidation() {
    let email = document.forms.loginform.email.value;
    if (email =="") {
        window.alert("Email cannot be empty");
    }
}