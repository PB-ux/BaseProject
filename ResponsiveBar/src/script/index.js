const menu = document.querySelector(".menu");
const hamb = document.querySelector(".menu-burger");
const body = document.body;

hamb.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
});

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
