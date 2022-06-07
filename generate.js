var characterLength = 8;
var choiceArr = [];

var specialCharArr = ["!", "@", "$", "^", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var NumberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// generate button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts =  getprompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {

  var newPassword = generatePassword();

  passwordText.value = newPassword;

} else {
  passwordText.value = "";
}

}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = math.floor(math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

  function getprompts () {
    choiceArr= [];

    characterLength = parseInt(prompt("How many characters would you like your password to have? 8-128 characters"));

    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length has to be between 8-128. Please try again.");
      return false;
    }

    if (confirm("would you like lower case letters in your password?")) {
      choiceArr = choiceArr.concat(lowerCaseArr);
    }

    if (confirm("would you like upper case letters in your password?")) {
      choiceArr = choiceArr.concat(upperCaseArr);
    }

    if (confirm("would you like special characters in your password?")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }

    if (confirm("Would you like numbers in your password?")) {
      choiceArr=choiceArr.concat(NumberArr);
    }

    return true;

  };
