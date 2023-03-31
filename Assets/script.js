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
//   Added length prompt
  var length = parseInt(lengthPrompt);
  
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128.");
    return;
  }

//   Added prompts for lowercase, uppercase, numbers, and special characters 
  var lowercasePrompt = prompt("Include lowercase letters? (yes/no)");
  var includeLowercase = lowercasePrompt.toLowerCase() === "yes";
  
  var uppercasePrompt = prompt("Include uppercase letters? (yes/no)");
  var includeUppercase = uppercasePrompt.toLowerCase() === "yes";

  var numberPrompt = prompt("Include numbers? (yes/no)");
  var includeNumber = numberPrompt.toLowerCase() === "yes";

  var symbolsPrompt = prompt("Include special characters? (yes/no)");
  var includeSymbols = symbolsPrompt.toLowerCase() === "yes";


// Defined variables with actual values for lowercase, uppercase, 
// numbers, and special characters 

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var number = "0123456789"
  var symbols = "!@#$%&*"

  // Defined an empty variable to store all the characters
  var allTypes = ""; 

  // Include lowercase characters
  if (includeLowercase) {
    allTypes += lowercase;
  }
//   Include uppercase characters
  if (includeUppercase) {
    allTypes += uppercase;
  }
//   Include numbers 
 if (includeNumber) {
    allTypes += number;
  }
//   Include symbols
  if (includeSymbols) {
    allTypes += symbols;
  }


// created empty variable to store the randomly generated password
  var password = "";
  
  // Generate random password using for loop and math.random method
  for (var i = 0; i < length; i++) {
    password += allTypes.charAt(Math.floor(Math.random() * allTypes.length));
  }
  
  passwordText.value = password;

}