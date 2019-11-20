var lowerCase = "abcdefghijklmnopqrstuvwxyz".split('');
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var special = "/?~!@#$%^&*()_+-<>".split('');
var number = "1234567890".split('');

console.log(lowerCase);
console.log(special);

var passwordSpecfics = {
    confirmUpper: true,
    confirmLength: 8,
    confirmSpecial: true,
    confirmNumber: true,
}

function specifics(){

var confirmUpper = confirm("Do you want your password to contain uppercase letters?");
var confirmSpecial = confirm("Do you want your password to contain special characters?");
var confirmNumber = confirm("Do you want your password to contain numbers?");
var confirmLength = prompt("How long would you like your password? Must be between 8 - 128 characters");

if (confirmLength < 8 || confirmLength > 128) {
    alert("Password must be between 8 - 128 characters!")
  }


}

specifics();

console.log(passwordSpecfics);