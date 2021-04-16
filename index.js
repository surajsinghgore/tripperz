//userinput

let name = prompt("ENTER YOUR NAME");

let username = name.toUpperCase();
let userVal = document.getElementById("userVal");

if (username == "") {
  userVal.innerHTML = "please reload the page";
} else {
  userVal.innerHTML = username;
}
console.log(userVal);

// submit button functions

