const input = document.querySelectorAll("input");
const selection = document.querySelector(".selection");

let text = [];

input.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.checked && el.id == "check-all") {
      input.forEach((el) => {
        if (el.id != "check-all" && !el.checked) {
          el.checked = true;
          text.push(el.id);
        }
      });
    } else if (el.id == "check-all") {
      input.forEach((el) => (el.checked = false));
      text.length = 0;
    } else if (el.checked) {
      text.push(el.id);
    } else {
      let index = text.indexOf(el.id);
      text.splice(index, 1);
    }

    if (text.length == 0) {
      selection.innerHTML = "Please, select your food";
    } else if (text.length == 1) {
      selection.innerHTML = `${text[0][0].toUpperCase() + text[0].slice(1)}`;
    } else if (text.length == 2) {
      selection.innerHTML = `${text[0][0].toUpperCase() + text[0].slice(1)}, ${
        text[1]
      }`;
    } else {
      let i = text.length - 2;
      selection.innerHTML = `${text[0][0].toUpperCase() + text[0].slice(1)}, ${
        text[1]
      } and ${i} more`;
    }
  });
});
