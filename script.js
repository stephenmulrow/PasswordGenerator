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

if (passwordUppercase != true && passwordLowercase != true && passwordSpecial != true && passwordNumber != true){
  alert("At least one character type must be selected")
  return;
}

for (var i = 0; i < passwordLength; i++){
   var indexChar = Math.floor(Math.random() * newPassword.length)
    var selectedChar = newPassword[indexChar]
    password+=selectedChar
 }
return password;
 
}




// Write password to the #password input
function writePassword(event) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
