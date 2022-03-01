// Assignment code here
generatePassword = function(){
 
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
  // prompt the user to input their desired length of the password word and store it in passwordLength
  var passwordLength = window.prompt("What would you like the length of your password to be? (Minimum 8, Max 128 characters)");
  
  // Change input to an integer
  passwordLength = parseInt(passwordLength);
  
  //check if passwordlength is an valid integer
  if(!Number.isInteger(passwordLength)){
    window.alert("Error, Please enter a valid number.")
    lengthPrompt();
  }
  else if(passwordLength < 8 || passwordLength > 128){
    window.alert("Error, Please enter a number between 8 and 128.");
    lengthPrompt();
  }
  
  passwordDetails();

}

  var passwordDetails = function(){
    window.alert("it works")
  }

  //call length prompt
  lengthPrompt();