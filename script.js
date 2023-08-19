/* toggle menu for 576px , 768px , 992px */

const hamburgerMenu = document.querySelector(".hamburger-menu");
const toggleMenu = document.querySelector(".toggle-menu");
const caretIcon = document.querySelector(".fa-caret-down");

hamburgerMenu?.addEventListener("click", function () {
  if (toggleMenu.style.display === "block") {
    toggleMenu.style.display = "none";
    caretIcon.classList.remove("click-rotate");
  } else {
    toggleMenu.style.display = "block";
    caretIcon.classList.toggle("click-rotate");
  }
});
