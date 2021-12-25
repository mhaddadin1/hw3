// Assignment Code
let generateBtn = document.querySelector("#generate");
// 1b. create array of letters
let lcLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
// generatePassword
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// return a final password as a string
function generatePassword() {
  // 1. assign a variable to the length of the password
  alert("in function");
  return "blahbah";
}

// Write password to the #password input

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
