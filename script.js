
// Add an event listener to each skills-box element
var skillsBoxes = document.getElementsByClassName("skills-box");
for (var i = 0; i < skillsBoxes.length; i++) {
  skillsBoxes[i].addEventListener("click", function () {
    // Toggle the active class on the clicked skills-box
    this.classList.toggle("active");
  });
}


