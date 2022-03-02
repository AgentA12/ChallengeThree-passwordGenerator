//lengthPrompt function
var lengthPrompt = function() {
    // prompt the user to input their desired length of the password word and store it in passwordLength
    passwordLength = window.prompt("What would you like the length of your password to be? (Minimum 8, Max 128 characters)");
    
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
    return passwordlength;
  }

  //lowercase function
var passwordDetailsLowercase = function(){
    //Prompt user to include lowercases
    lowercaseComfirm = window.prompt("Would you like to include lowercases? (type 'yes' or 'no')");
  
    if(lowercaseComfirm === "yes" || lowercaseComfirm === "YES"){
     
    }
    else if (lowercaseComfirm === "no" || lowercaseComfirm === "NO"){
      
  } 
  else {
    window.alert("Error, Please enter a valid input")
    passwordDetailsLowercase();
  }
  
  }

  //uppercase function
var passwordDetailsUppercase = function(){
    uppercaseComfirm = window.prompt("Would you like to include uppercases? (type 'yes' or 'no')");
  
     if(uppercaseComfirm === "yes" || uppercaseComfirm === "YES"){
      
     }
     else if (uppercaseComfirm === "no" || uppercaseComfirm === "NO"){
       
   } 
   else {
     window.alert("Error, Please enter a valid input")
     passwordDetailsUppercase();
   }
  }

  //uppercase function
var passwordDetailsUppercase = function(){
    uppercaseComfirm = window.prompt("Would you like to include uppercases? (type 'yes' or 'no')");
  
     if(uppercaseComfirm === "yes" || uppercaseComfirm === "YES"){
      
     }
     else if (uppercaseComfirm === "no" || uppercaseComfirm === "NO"){
       
   } 
   else {
     window.alert("Error, Please enter a valid input")
     passwordDetailsUppercase();
   }
  }
  
  //numeric function
  var passwordDetailsNumeric = function(){
    numericComfirm = window.prompt("Would you like to include numeric characters? (type 'yes' or 'no')");
  
    if(numericComfirm === "yes" || numericComfirm === "YES"){
     
    }
    else if (numericComfirm === "no" || numericComfirm === "NO"){
      
  } 
  else {
    window.alert("Error, Please enter a valid input")
    passwordDetailsNumeric();
  }
  
  }
  
  //special chars function
  var passwordDetailsSpecial = function(){
    specialComfirm = window.prompt("Would you like to include special characters? (type 'yes' or 'no')");
  
    if(specialComfirm === "yes" || specialComfirm === "YES"){
     
    }
    else if (specialComfirm === "no" || specialComfirm === "NO"){
      
  } 
  else {
    window.alert("Error, Please enter a valid input")
    passwordDetailsSpecial();
  }
    
  }
  
  //applyDetails function
  var applyDetails = function(){
      
    newPassword = [];
   for (var i = 0; i < passwordLength; i++){
  
   let randomNum = Math.floor(Math.random() * 10);
   let randomNum1 = Math.floor(Math.random() * 26);
  
   let specialChars = ['!', '@', '$', '%', '^', '&', '*', '~', '(', ')'];
  
   let uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
   let lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
   let numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  
   }
  
  }
