var lCase = "abcdefghijklmnopqrstuvwxyz".split(""); //split converts a string into an array
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var special = "/?~!@#$%^&*()_+-<>".split("");
var number = "1234567890".split("");

console.log(lCase);
console.log(special);

var passwordSpecfics = {
  confirmUpper: true,
  confirmLength: 8,
  confirmSpecial: true,
  confirmNumber: true
};

function makePassword(isUpper, isSpecial, isNumber, numLength) {
  var password = "";
  // Math.floor(Math.random()*5)  //0 to 4

  // password= password + "P"  //P
  // password= password + "h" // Ph
  // pasword=password +"i" //Phi
  //step 1: get input for length
  //step 2: iterate # of arrays according to user selection
  //step 3: staisfy all user conditions
  //step 4: sting catatination

  for (i = 0; i < numLength; i++) {
    {
      var ranIndexUppercase = Math.floor(Math.random() * upperCase.length);
      var ranIndexLowercase = Math.floor(Math.random() * lCase.length);
      var ranIndexSpecial = Math.floor(Math.random() * special.length);
      var ranIndexNumber = Math.floor(Math.random() * number.length);
      console.log(
        ranIndexUppercase,
        ranIndexLowercase,
        ranIndexSpecial,
        ranIndexNumber
      );

      if (isUpper) {
        password = password + upperCase[ranIndexUppercase];
        isUpper = false;
      } else if (isSpecial) {
        password = password + special[ranIndexSpecial];
        isSpecial = false;
      } else if (isNumber) {
        password = password + number[ranIndexNumber];
        isNumber = false;
      } else {
        password = password + lCase[ranIndexLowercase];
      }

      console.log(password);
    }
  }
  document.getElementById("password").value = password;
}
//makePassword();

function specifics() {
  var confirmUpper = confirm(
    "Do you want your password to contain uppercase letters?"
  );
  var confirmSpecial = confirm(
    "Do you want your password to contain special characters?"
  );
  var confirmNumber = confirm("Do you want your password to contain numbers?");
  var confirmLength = prompt(
    "How long would you like your password? Must be between 8 - 128 characters"
  );

  if (confirmLength >= 8 && confirmLength <= 128) {
    confirmLength = parseInt(confirmLength);
    console.log(confirmUpper, confirmSpecial, confirmNumber, confirmLength);

    makePassword(confirmUpper, confirmSpecial, confirmNumber, confirmLength);

    //if statement is true if all conditions are met
  } else {
    alert("Password must be between 8 - 128 characters!"); //error message when false condition
  }
}

function clipboard() {
  alert("Copy Password");
  clipboard();
}

document.getElementById("generate").addEventListener("click", function() {
  specifics();

  document.getElementById("clipboard").addEventListener("click", clipboard);

  function clipboard() {
    var copyText = document.querySelector("#password");

    copyText.select();

    document.execCommand("copy");
  }
});
