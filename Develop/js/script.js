// Assignment code here
generatePassword = function () {
  //call respective function to store a value of true or false
  var passLengthBool = lengthPrompt();

  var passlowercaseBool = passwordDetailsLowercase();

  var passuppercaseBool = passwordDetailsUppercase();

  var passnumericBool = passwordDetailsNumeric();

  var passspecialBool = passwordDetailsSpecial();

  //check to see if at lease one value is true else return to start of program
  if (
    passlowercaseBool === false &&
    passuppercaseBool === false &&
    passnumericBool === false &&
    passspecialBool === false
  ) {
    window.alert("Error, please select at lease one character type.");
    return null;
  }

  //pass boolean values to applypassworddetails function and store returned value in newPassword
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

//lengthPrompt function
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

//lowercase function
var passwordDetailsLowercase = function () {
  lowercaseComfirm = window.confirm(
    "Would you like to include lowercase letters? ('OK' for YES 'CANCEL' for NO)"
  );
  return lowercaseComfirm;
};

//uppercase function
var passwordDetailsUppercase = function () {
  uppercaseComfirm = window.confirm(
    "Would you like to include uppercase letters? ('OK' for YES 'CANCEL' for NO)"
  );
  return uppercaseComfirm;
};
//numeric function
var passwordDetailsNumeric = function () {
  numericComfirm = window.confirm(
    "Would you like to include numeric characters? ('OK' for YES 'CANCEL' for NO)"
  );
  return numericComfirm;
};
//special chars function
var passwordDetailsSpecial = function () {
  specialComfirm = window.confirm(
    "Would you like to include special characters? ('OK' for YES 'CANCEL' for NO)"
  );
  return specialComfirm;
};

//applyPasswordDetails function with bool values passed as arguments
var applyPasswordDetails = function (
  length,
  lowercases,
  uppercases,
  numericchars,
  specialchars
) {
  //declare strings of chars to be indexed through
  let specialCharsString = "!@#$%^&*()_-+=[]{};:./,<?>";
  let uppercaseCharsString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercaseCharsString = "abcdefgfijklmnopqrstuvwxyz";
  let numericCharsString = "1234567890";
  //make the array of booleans aobject to keep variable name to reference to correct string of characters
  let arrayOfBools = [
    { lowercases },
    { uppercases },
    { numericchars },
    { specialchars },
  ];
  let password = "";
  //loop through the number of times specified by "length"
  for (var n = 0; n < length; n++) {
    //create random number and use it to index to random location in the arrayofbools
    var randomNum = Math.floor(Math.random() * arrayOfBools.length);
    var randomBool = arrayOfBools[randomNum];
    //keyword "in" returns true if the string "lowercase" is a key/value pair
    if ("lowercases" in randomBool) {
      //if the value of the key is true add a random index from the lowercasecharsstring to password
      //Else negate n with -- and continue the loop to find correct key
      if (arrayOfBools[0].lowercases == true) {
        password +=
          lowercaseCharsString[
            Math.floor(Math.random() * lowercaseCharsString.length)
          ];
      } else {
        n--;
        continue;
      }
    } else if ("uppercases" in randomBool) {
      if (arrayOfBools[1].uppercases == true) {
        password +=
          uppercaseCharsString[
            Math.floor(Math.random() * uppercaseCharsString.length)
          ];
      } else {
        n--;
        continue;
      }
    } else if ("numericchars" in randomBool) {
      if (arrayOfBools[2].numericchars == true) {
        password +=
          numericCharsString[
            Math.floor(Math.random() * numericCharsString.length)
          ];
      } else {
        n--;
        continue;
      }
    } else if ("specialchars" in randomBool) {
      if (arrayOfBools[3].specialchars == true) {
        password +=
          specialCharsString[
            Math.floor(Math.random() * specialCharsString.length)
          ];
      } else {
        n--;
        continue;
      }
    }
  }
  //finally return the password
  return password;
};
