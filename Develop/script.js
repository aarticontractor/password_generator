// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var my_new_password = "sagdyady3y1hdsuai";
    passwordText.value = my_new_password;
}
