const body = document.body;
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".box-modal-btn");
const closeModalBtn = document.querySelector(".modal-btn-close");

openModalBtn.addEventListener("click", () => {
  body.classList.add("bg_blur");
  modal.classList.add("closed");
});

closeModalBtn.addEventListener("click", () => {
  body.classList.remove("bg_blur");
  modal.classList.remove("closed");
});
