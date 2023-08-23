window.addEventListener("load", () => {
  document.querySelector("#preloader").style.cssText = "display:none;";
});


let loginpopup = document.querySelectorAll("#login");
let registerpopup = document.querySelectorAll("#signup");

let nextbutton_1 = document.querySelectorAll("#next-button-1");
let nextbutton_2 = document.querySelectorAll("#next-button-2");

let backbutton_1 = document.querySelectorAll("#back-button-1");
let backbutton_2 = document.querySelectorAll("#back-button-2");


function openLoginPopup() {
  loginpopup.classList.add("open-popup");
}
function openSignupPopup() {
  registerpopup.classList.add("open-popup");
}
function closePopup() {
  loginpopup.classList.remove("open-popup");
  registerpopup.classList.remove("open-popup");
}
function nextButton() {

}
function nextButton() {

}


// Add an event listener to each skills-box element
var skillsBoxes = document.getElementsByClassName("skills-box");
for (var i = 0; i < skillsBoxes.length; i++) {
  skillsBoxes[i].addEventListener("click", function () {
    // Toggle the active class on the clicked skills-box
    this.classList.toggle("active");
  });
}


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});