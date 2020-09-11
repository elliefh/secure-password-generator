// // Assignment Code
var generateBtn = document.querySelector("#generate");

// function that identifies user's password criteria and generates password based on user's password criteria
function generatePassword() {
  var passwordLength = 0;
  var passwordCharacters = "";
  var newPassword = [];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ["~","!","@","#","$","%","^","&","*","(",")","_","+","`","-","=","{","}","|","[","]","?","/","<",">",",",".","'"];
  var requestedTypes = [];

  // get user ready to answer password criteria prompts 
  confirm("Are you ready to answer a series of prompts regarding your password criteria?");
  if (confirm) {
    // prompt user's password length criteria  
    passwordLength = prompt("To ensure security, our minimum password length is 8 characters and the maximum length is 128 characters. Please specify your desired password length.")
    // ensure user input for password length is numerical  
    if (isNaN(passwordLength)) {
      alert("Please input a number.");
    }
    // ensure user input for password length is within the min. and max. range 
    else if (passwordLength > 129 || passwordLength < 8) {
      alert("Please input a number between 8 and 128.");
    }
    // proceed to the next password criteria prompt if user input is appropriate 
    else {
      alert("You selected " + passwordLength + " for password length.");
      // prompt user's password character type criteria 
      passwordCharacters = prompt("We offer four unique character types: lowercase, uppercase, numeric and special characters. Please specify your desired character types. (Please select at least one character type.)").toLowerCase();
      // ensure user input for character type fits the listed character types 
      if ((passwordCharacters.includes("uppercase")) || 
          (passwordCharacters.includes("lowercase")) ||
          (passwordCharacters.includes("numeric")) ||
          (passwordCharacters.includes("special"))) {
        alert("Your password is being generated!");
        // update requestedTypes array to only reflect users' desired character types 
        if (passwordCharacters.includes("uppercase")) {
          requestedTypes = requestedTypes.concat(uppercase);
        }
        if (passwordCharacters.includes("lowercase")) {
          requestedTypes = requestedTypes.concat(lowercase);
        }
        if (passwordCharacters.includes("numeric")) {
          requestedTypes = requestedTypes.concat(numeric);
        }
        if (passwordCharacters.includes("special")) {
          requestedTypes = requestedTypes.concat(special);
        }
        // generate a new password based on users' desired password length and character types 
        for (let i = 0; i < passwordLength; i++) {
          var results = requestedTypes[Math.floor(Math.random()*requestedTypes.length)];
          newPassword.push(results);
        }
        // display generated password onto the screen in string format 
        var passwordText = document.querySelector("#password");
        passwordText.value = newPassword.join("");
      }
      // stop proceeding if user input does not include any of the listed character types 
      else {
        alert("Please select at least one character type out of the four provided.");
      }

    }
  }
}