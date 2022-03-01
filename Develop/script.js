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



//lengthPrompt function
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
  
  passwordDetailsLowercase();

}

  //lowercase function
  var passwordDetailsLowercase = function(){
    //Prompt user to include lowercases
    var lowercaseComfirm = window.prompt("Would you like to include lowercases? (type 'yes' or 'no')");

    if(lowercaseComfirm === "yes" || lowercaseComfirm === "YES"){
     passwordDetailsUppercase();
    }
    else if (lowercaseComfirm === "no" || lowercaseComfirm === "NO"){
      passwordDetailsUppercase();
  } 
  else {
    window.alert("Error, Please enter a valid input")
    passwordDetailsLowercase();
  }
}
  
var passwordDetailsUppercase = function(){
  var uppercaseComfirm = window.prompt("Would you like to include uppercases? (type 'yes' or 'no')");

    if(uppercaseComfirm === "yes" || uppercaseComfirm === "YES"){
      passwordDetailsNumeric();
    }
    else if (uppercaseComfirm === "no" || uppercaseComfirm === "NO"){
      passwordDetailsNumeric();
  } 
  else {
    window.alert("Error, Please enter a valid input")
    passwordDetailsUppercase();
  }
}

  var passwordDetailsNumeric = function(){
    var numericComfirm = window.prompt("Would you like to include numeric characters? (type 'yes' or 'no')");

    if(numericComfirm === "yes" || numericComfirm === "YES"){
      passwordDetailsSpecial();
    }
    else if (numericComfirm === "no" || numericComfirm === "NO"){
      passwordDetailsSpecial();
  } 
  else {
    window.alert("Error, Please enter a valid input")
    passwordDetailsNumeric();
  }
}

var passwordDetailsSpecial = function(){
  var specialComfirm = window.prompt("Would you like to include special characters? (type 'yes' or 'no')");

  if(specialComfirm === "yes" || specialComfirm === "YES"){
    window.alert("success!")
    generatePassword();
  }
  else if (specialComfirm === "no" || specialComfirm === "NO"){
    window.alert("success!")
    generatePassword();
} 
else {
  window.alert("Error, Please enter a valid input")
  passwordDetailsSpecial();
}

}
  //call length prompt
  lengthPrompt();