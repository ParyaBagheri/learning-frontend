const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const password = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
const submitButton = document.querySelector("button");

let emailValidity = false;
let passwordValidity = false;
function updateButton(){
    submitButton.disabled = !emailValidity || !passwordValidity;
}
email.addEventListener("input", (event)=> {
    emailValidity = event.target.value.includes("@");
    event.target.classList.toggle("invalid", !emailValidity);
    if(!emailValidity) {
        console.log("ENter a valid email !");
        emailError.textContent = "Enter a valid email";
    }
    else {
        emailError.textContent = "";
        console.clear();
    }
    updateButton();
});
password.addEventListener("input", (event)=> {
    passwordString = event.target.value;
    specialChars = ["!", "@", "#", "$", "%", "&", "*"];
    passwordValidity = specialChars.some( el => passwordString.includes(el));
    if(!passwordValidity) {
        console.log("Your password must include special characters");
        passwordError.textContent = "Your password must include special characters!";
    }
    else {
        console.clear();
        passwordError.textContent = "";
    }
    updateButton();
});


