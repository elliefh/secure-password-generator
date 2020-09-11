// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function that tracks users' password criteria
function generatePassword() {
  var passwordLength = 0;
  var passwordCharacters = "";
  var newPassword = [];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ["~","!","@","#","$","%","^","&","*","(",")","_","+","`","-","=","{","}","|","[","]","?","/","<",">",",",".","'"];
  var requestedTypes = [];

  confirm("Are you ready to answer a series of prompts regarding your password criteria?");
  if (confirm) {
    // prompt first password criteria: password length 
    passwordLength = prompt("To ensure security, our minimum password length is 8 characters and the maximum length is 128 characters. Please specify your desired password length.")
    // ensure user input for password length is numerical and within the 8 - 128 range  
    if (isNaN(passwordLength)) {
      alert("Please input a number.");
    }
    else if (passwordLength > 129 || passwordLength < 8) {
      alert("Please input a number between 8 and 128.");
    }
    else {
      alert("You selected " + passwordLength + " for password length.");
      // prompt second password criteria: password character types 
      passwordCharacters = prompt("We offer four unique character types: lowercase, uppercase, numeric and special characters. Please specify your desired character types. (Please select at least one character type.)").toLowerCase();
      // ensure user input for character type fits the listed character types 
      if ((passwordCharacters.includes("uppercase")) || 
          (passwordCharacters.includes("lowercase")) ||
          (passwordCharacters.includes("numeric")) ||
          (passwordCharacters.includes("special"))) {
        alert("Your password is being generated!");
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
        for (let i = 0; i < passwordLength; i++) {
          var results = requestedTypes[Math.floor(Math.random()*requestedTypes.length)];
          newPassword.push(results);
        }
        console.log(newPassword);
        return newPassword.join("");
      }
      
      else {
        alert("Please select at least one character type out of the four provided.");
      }

    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

