// Buttons
const containerBtn = document.querySelector(".container-btn");
const btnSearch = document.querySelector(".btn-search");
const btnRun = document.querySelector(".btn-run");
const btnClose = document.querySelector(".btn-close");

// Side menu
const sideMenu = document.querySelector(".container-side-menu");
const sideTitle = document.querySelector(".content__title");

// Black layer
const blackLayer = document.querySelector(".black-layer");

// Events
function show(title, btn) {
  btnClose.innerHTML = btn;
  sideTitle.innerHTML = title;
  sideMenu.style.left = "0";
  blackLayer.style.opacity = "0.65";
  blackLayer.style.zIndex = "1";
}

function close() {
  sideMenu.style.left = "-500px";
  blackLayer.style.opacity = "0";
  blackLayer.style.zIndex = "-1";
}

btnClose.addEventListener("click", close);
blackLayer.addEventListener("click", close);
