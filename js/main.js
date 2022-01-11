const isMobile = document.querySelector(".mobile-menu");
const menuBtn = document.querySelector(".mobile-menu .menu-btn");
const exitBtn = document.querySelector(".mobile-menu .exit-btn");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();

  menuBtn.classList.add("hidden");
  exitBtn.classList.remove("hidden");
  document.getElementsByClassName("header-menu")[0].style.cssText = `
  visibility: visible;
  opacity: 1;
  `;
});

exitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  menuBtn.classList.remove("hidden");
  exitBtn.classList.add("hidden");
  document.getElementsByClassName("header-menu")[0].style.cssText = `
  visibility: hidden;
  opacity: 0;
  `;
});
