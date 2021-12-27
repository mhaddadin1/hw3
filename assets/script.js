// Assignment Code
let generateBtn = document.querySelector("#generate");
//create array
let lowerCase = [
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
];
let upperCase = [
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
];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "]",
  "}",
  "|",
  "\\",
  "/",
  ":",
  ";",
  "<",
  ",",
  ">",
  ".",
  "?",
];

// ask questions

// generatePassword

function generatePassword() {
  // assign a variable to all arrays
  let chrs = [];
  // convert password array to string
  let password = "";

  // assign a variable to the length of the password
  let pwLength = prompt("Choose a password length between 8 and 128.");
  // confirm user selected length 8 to 128
  if (pwLength < 8 && pwLength > 128) {
    alert(
      "Password length must be between 8 and 128. Please enter a correct number."
    );
    prompt("Choose a password length between 8 and 128.");
  }
  // ask questions for arrays
  let pwUpper = confirm("Do you want uppercase letters?");
  if (pwUpper === true) {
    chrs = chrs.concat(upperCase);
  }
  let pwLower = confirm("Do you want lowercase letters?");
  if (pwLower === true) {
    chrs = chrs.concat(lowerCase);
  }
  let pwNumbers = confirm("Do you want numbers?");
  if (pwNumbers === true) {
    chrs = chrs.concat(numbers);
  }
  let pwSymbols = confirm("Do you want to use symbols?");
  if (pwSymbols === true) {
    chrs = chrs.concat(symbols);
  }

  // loop through array of letters
  for (let i = 0; i < pwLength; ++i) {
    password += chrs[Math.floor(Math.random() * chrs.length)];
  }
  // return password
  return password;
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
