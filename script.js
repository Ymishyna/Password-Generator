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

// function to gather the User input and validate that it meets password criteria
function userInput() {
  // Convert the user input to an integer
  var length = parseInt(prompt("How long do you want your password to be?"));
console.log(length);
  // Verify length is a NUMBER (not an NaN) and between 8 and 128
  if (Number.isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128");
    return null;
  }

  var lower = confirm("Click OK to include lowercase character.");
  var upper = confirm("Click OK to include uppercase character.");
  var numeric = confirm("Click OK to include numeric characters.");
  var specialChar = confirm("Click OK to include special characters.");

  // Verify that at least one option was chosen
  if (lower === false && upper === false && numeric === false && specialChar === false) {
    alert("Please choose at least one character type.");
    return null;
  }
  // store answers in object
  var answers = {
    length: length,
    lower: lower,
    upper: upper,
    numeric: numeric,
    specialChar: specialChar
  }
  return answers;
}

// Define Generated Password function
function generatePassword(answers) {
  // Declare arrays based on user answers and length
  var mustHave = []
  var theRest = []
  var final = []
  console.log(mustHave, theRest, final);
// process each array based on user answers true or false
if (lower) {
  theRest = theRest.concat(lowerCase)
  mustHave.push(random(lowerCase))
}
if (upper) {
  theRest = theRest.concat(upperCase)
  mustHave.push(random(upperCase))
}
if (numeric) {
  theRest = theRest.concat(numericChar)
  mustHave.push(random(numericChar))
}
if (specialChar) {
  theRest = theRest.concat(specialTypes)
  mustHave.push(random(specialTypes))
}
  //going to call out answers.length and apply it to the rest array through for loop, logick through for loop will be to randomize theRest array
  for (let i = 0; i < answers.length; i++) {
    var restOfThem = random(theRest);
    final.push(restOfThem)
  }
  // replace first entries of final array with must have characters
  for (let i = 0; i < mustHave.length; i++) {
    final[i] = mustHave[i]
  }
  return final.join("");
}
