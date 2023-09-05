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

// show menu when scroll up , hide menu when scroll down
/* const headerNavigation = document.querySelector("header");

if (headerNavigation) {
  let prevScrollPos = window.scrollY;

  headerNavigation.style.transition = " 0.5s ease";

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.scrollY;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    //Update previous scroll position with the current scroll position
    prevScrollPos = currentScrollPos;

    //ternary operations
    headerNavigation.style.position = isScrollingUp ? "fixed" : "absolute";
    headerNavigation.style.top = isScrollingUp ? "0" : "2rem";
    headerNavigation.style.opacity = isScrollingUp ? "1" : "0";
  });
} */
