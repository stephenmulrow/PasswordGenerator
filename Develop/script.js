// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var newPassword = ""
  var password = ""
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers = "0123456789"
  var special = "!@#$%^&*"
  var passwordLength = prompt ("How many characters would you like your password to be? Please choose between 8-128")

if (passwordLength < 8 || passwordLength > 128) {
  alert ("Please choose a number between 8 and 128")
return;
} 

var passwordUppercase = confirm("Do you want an uppercase letter in your password?")
var passwordLowercase = confirm("Do you want a lowercase letter in your password?")
var passwordNumber = confirm("Do you want a number in your password?")
var passwordSpecial = confirm("Do you want a special character in your password?")

if (passwordLowercase === true) {
  newPassword += lowercase
}

if (passwordUppercase === true) {
  newPassword += uppercase
}

if (passwordNumber === true) {
  newPassword += numbers
}

if (passwordSpecial === true) {
  newPassword += special
}

for (var i = 0; i < passwordLength; i++){
   var indexChar = Math.floor(Math.random() * newPassword.length)
    var selectedChar = newPassword[indexChar]
    password+=selectedChar
 // select a random character for each time we add to the length 
 // add it to the password string 
 // 
 }
return password;
// return password 
}




// Write password to the #password input
function writePassword(event) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or //special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be /selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page

// need prompts for password length 8-128
// lowercase, uppercase, numbers, special characters 
// if user selects # outside of range, restart process
// if user doesnt select at least one character type, restart process
// NEED and array to iterate over to get password characters
//