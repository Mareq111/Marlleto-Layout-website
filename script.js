/* toggle menu for 576px , 768px , 992px */

const hamburgerMenu = document.querySelector(".hamburger-menu");
const toggleMenu = document.querySelector(".toggle-menu");
const caretIcon = document.querySelector(".fa-caret-up");

hamburgerMenu?.addEventListener("click", function () {
  if (toggleMenu) {
    toggleMenu.classList.toggle("active");

    if (caretIcon) {
      caretIcon.classList.toggle("click-rotate");
    }
  }
});



