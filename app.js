document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelectorAll(".board__row__box");
  const header = document.querySelector(".header");

  // Initial Value for every Player
  let initialValue = ["O", "X"];

  // Possible state of winner
  //   const winnerStates = [
  //     [1, 2, 3],
  //     [4, 5, 6],
  //     [7, 8, 9],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [3, 6, 9],
  //     [1, 5, 9],
  //     [3, 5, 7],
  //   ];
  // Turn Number
  let turn = 0;
  header.textContent = `Turn : O`;

  // Game Play
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", () => {
      // O player
      if (!turn) {
        box[i].textContent = initialValue[turn];
        if (checkWinner("O")) {
          header.textContent = `Winner  is ${initialValue[turn]}`;
          box.forEach((box) => {
            box.classList.add("disabled");
          });
        } else header.textContent = `Turn : X`;
        box[i].classList.add("disabled");
        turn = 1;
        // X player
      } else {
        box[i].textContent = initialValue[turn];
        if (checkWinner("X")) {
          header.textContent = `Winner  is ${initialValue[turn]}`;
          box.forEach((box) => {
            box.classList.add("disabled");
          });
        } else header.textContent = `Turn : O`;
        turn = 0;
      }
    });
  }

  // Win Check Function
  function checkWinner(value) {
    // Win
    if (
      box[0].textContent === value &&
      box[1].textContent === value &&
      box[2].textContent === value
    ) {
      return true;
    }
    if (
      box[3].textContent === value &&
      box[4].textContent === value &&
      box[5].textContent === value
    ) {
      return true;
    }
    if (
      box[6].textContent === value &&
      box[7].textContent === value &&
      box[8].textContent === value
    ) {
      return true;
    }
    if (
      box[0].textContent === value &&
      box[3].textContent === value &&
      box[6].textContent === value
    ) {
      return true;
    }
    if (
      box[1].textContent === value &&
      box[4].textContent === value &&
      box[7].textContent === value
    ) {
      return true;
    }
    if (
      box[2].textContent === value &&
      box[5].textContent === value &&
      box[8].textContent === value
    ) {
      return true;
    }
    if (
      box[0].textContent === value &&
      box[4].textContent === value &&
      box[8].textContent === value
    ) {
      return true;
    }
    if (
      box[2].textContent === value &&
      box[4].textContent === value &&
      box[6].textContent === value
    ) {
      return true;
    }

    // Lose
    return false;
  }

  // End
});
