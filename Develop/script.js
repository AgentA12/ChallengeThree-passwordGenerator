// Assignment code here
generatePassword = function(){
  var specialCharacters = ['!', '#', '$', '@', '%', '^', '*'];
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var lengthPrompt = function() {
  var passwordLength = window.prompt("What would you like the length of your password to be? (Minimum 8, Max 128 characters)");
  passwordLength = parseInt(passwordLength);
  console.log(Number.isInteger(passwordLength));
  
    

}

lengthPrompt();