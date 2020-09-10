// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

var passwordLength = 0;
var passwordCharacters = [lowercase, uppercase, numeric, special];

// function that tracks users' password criteria
function passwordCriteria() {
  confirm("Are you ready to answer a series of prompts regarding your password criteria?");
  if (confirm) {

    // prompt first password criteria: password length 
    passwordLength = prompt("To ensure security, our minimum password length is 8 characters and the maximum length is 128 characters. Please specify your desired password length.")

    // ensure user input for password length is numerical 
    if (isNaN(passwordLength)) {
      alert("Please input a number.");
    }
    else if (passwordLength > 129 || passwordLength < 8) {
      alert("Please input a number between 8 and 128.");
    }
    else {
      alert("You selected " + passwordLength + " for password length.");
    
      // prompt second password criteria: password length 
      passwordCharacters = prompt("We can include lowercase, uppercase, numeric and/or special characters in your password. Please specify your desired character types. (Please select at least one character type.)").toLowerCase();

    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page