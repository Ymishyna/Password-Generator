// Assignment Code

// Arrays holding different combinations
var lowerCase = ["a", "b", "c", "d","e", "f", "g", "h"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H"];
var numericChar = [1, 2, 3, 4, 5, 6, 7];
var specialTypes = ["!", "@", "$", "%", "^", "&"];

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", main);

// main control function which is called when user clicks generate password button
function main() {
  var answers = userInput();
  var password = generatePassword(answers);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}