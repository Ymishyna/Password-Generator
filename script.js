// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define Generated Password function 
function generatePassword() {

  // Create var to hold password
  var password = '';

  // 1. promt user for the pasword creteria
  //    a. password length 8 < 128
  var length = prompt('How long do you want your password to be?')
  if (length < 8 || length > 128) {
    alert('Please enter between 8 and 128.');
    return null;
  }

  //    b. lowercase, uppercase, numbers, specia, characters
  var lower = confirm ('Click OK to include lowercase character.');
  var upper = confirm ('Click OK to include uppercase character.');
  var numeric = confirm ('Click OK to include numeric characters.');
  var specialChar = confirm ('Click OK to include special characters.');

  // Arrays holding different combinsations

  


  // 2. validate the input 
  if (lower === false && upper === false && numeric === false && specialChar === false) {
    alert ('Please choose at least one character type.');
    return null;
  }


  // 3. generate password based on criteria





  // 4. display password to the page 

  return 'Generated password will go here!'
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
