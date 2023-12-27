window.addEventListener("load", () => {
  document.querySelector("#preloader").style.cssText = "display:none;";
});


document.querySelectorAll("#loginbutton, #logintext").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector("#login").style.cssText = "display:block;";
    document.querySelector("#signup").style.cssText = "display:none;";
  });
});

document.querySelectorAll("#signupbutton, #registertext").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector("#signup").style.cssText = "display:block;";
    document.querySelector("#login").style.cssText = "display:none;";
  });
});


document.querySelectorAll(".close-popup").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".popup").forEach(popup => {
      popup.style.cssText = "display:none;";
    });
  });
});


document.querySelector("#next-button-1").addEventListener("click", () => {
  document.querySelector("#form-1").style.cssText = "visibility:.1;";
});

document.querySelector("#next-button-2").addEventListener("click", () => {

});

document.querySelector("#back-button-1").addEventListener("click", () => {

});

document.querySelector("#back-button-2").addEventListener("click", () => {

});

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