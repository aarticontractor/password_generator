var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


function generatePassword() {
  var lengthPrompt = prompt("Enter password length (between 8 and 128):");
  if (lengthPrompt === null || lengthPrompt === "") {
    alert("Password length cannot be empty.");
    return;
  }
  var length = parseInt(lengthPrompt);
  
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return;
  }
  var lowercasePrompt = prompt("Include lowercase letters? (yes/no)");
  var includeLowercase = lowercasePrompt.toLowerCase() === "yes";
  

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  
  var allTypes = ""; 
  // Include lowercase characters
  if (includeLowercase) {
    allTypes += lowercase;
  }
  


  var password = "";
  
  // Generate random password
  for (var i = 0; i < length; i++) {
    password += allTypes.charAt(Math.floor(Math.random() * allTypes.length));
  }
  
  passwordText.value = password;

}