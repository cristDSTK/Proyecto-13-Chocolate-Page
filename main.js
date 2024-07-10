let btnOpenMenu = document.querySelector(".openMenu");
let btnCloseMenu = document.querySelector(".closeMenu");
let menu = document.querySelector(".navMenu");

btnOpenMenu.addEventListener("click", () => {
  menu.style.top = "0px";
});

btnCloseMenu.addEventListener("click", () => {
  menu.style.top = "-1000px";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 500) {
    menu.style.top = "-1000px";
  }
});
