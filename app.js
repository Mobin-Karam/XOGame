const box = document.querySelectorAll(".board__row__box");

let initialValue = ["O", "X"];
let turn = 0;

if (turn) {
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", () => {
      box[i].textContent = initialValue[turn];
      turn = 1;
    });
  }
} else {
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", () => {
      box[i].textContent = initialValue[turn];
      turn = 0;
    });
  }
}
