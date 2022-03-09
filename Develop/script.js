// Assignment code here
generatePassword = function () {
  var passLengthBool = lengthPrompt();

  var passlowercaseBool = passwordDetailsLowercase();

  var passuppercaseBool = passwordDetailsUppercase();

  var passnumericBool = passwordDetailsNumeric();

  var passspecialBool = passwordDetailsSpecial();

  var newPassword = applyPasswordDetails(
    passLengthBool,
    passlowercaseBool,
    passuppercaseBool,
    passnumericBool,
    passspecialBool
  );
  return newPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//-------lengthPrompt function
var lengthPrompt = function () {
  // prompt the user to input their desired length of the password word and store it in passwordLength
  passwordLength = window.prompt(
    "What would you like the length of your password to be? (Minimum 8, Max 128 characters)"
  );

  // Change input to an integer
  passwordLength = parseInt(passwordLength);

  //check if passwordlength is an valid integer
  if (!Number.isInteger(passwordLength)) {
    window.alert("Error, Please enter a valid number.");
    lengthPrompt();
  } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Error, Please enter a number between 8 and 128.");
    lengthPrompt();
  }

  return passwordLength;
};

//-----lowercase function
var passwordDetailsLowercase = function () {
  lowercaseComfirm = window.confirm(
    "Would you like to include lowercase letters? ('OK' for Yes 'CANCEL' for No)"
  );
  if (lowercaseComfirm) {
    return lowercaseComfirm;
  } else {
    return lowercaseComfirm;
  }
};

//------uppercase function
var passwordDetailsUppercase = function () {
  uppercaseComfirm = window.confirm(
    "Would you like to include uppercase letters? ('OK' for Yes 'CANCEL' for No)"
  );
  if (uppercaseComfirm) {
    return uppercaseComfirm;
  } else {
    return uppercaseComfirm;
  }
};

//------numeric function
var passwordDetailsNumeric = function () {
  numericComfirm = window.confirm(
    "Would you like to include numeric characters? ('OK' for Yes 'CANCEL' for No)"
  );
  if (numericComfirm) {
    return numericComfirm;
  } else {
    return numericComfirm;
  }
};

//-------special chars function
var passwordDetailsSpecial = function () {
  specialComfirm = window.confirm(
    "Would you like to include special characters? ('OK' for Yes 'CANCEL' for No)"
  );
  if (specialComfirm) {
    return specialComfirm;
  } else {
    return specialComfirm;
  }
};

//-----applyPasswordDetails function
var applyPasswordDetails = function (
  length,
  lowercases,
  uppercases,
  numericchars,
  specialchars
) {
  let specialChars = "!@#$%^&*()_-+=[]{};:./,<?>";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseChars = "abcdefgfijklmnopqrstuvwxyz";
  let numericChars = "1234567890";

  Password = [];
  for (var i = 0; i < length; i++) {
    let randomNumLength10 = Math.floor(Math.random() * 10);
    let randomNumLength26 = Math.floor(Math.random() * 26);

    if (lowercases) {
      Password[i] = lowercaseChars[randomNumLength26];
    } else if (uppercases) {
      Password[i] = uppercaseChars[randomNumLength26];
    } else if (numericchars) {
      Password[i] = numericChars[randomNumLength10];
    } else if (specialChars) {
      Password[i] = specialChars[randomNumLength26];
    }
  }
  Password = Password.join("");
  return Password;
};
