document.addEventListener("DOMContentLoaded", () => {
  const fakeBox = document.querySelectorAll(".board__row__box");
  const header = document.querySelector(".header");
  const reset = document.querySelector(".reset");

  const box = [];
  for (let i = 0; i < fakeBox.length; i++) {
    box.push(fakeBox[i]);
  }

  // Initial Value for every Player
  let initialValue = ["O", "X"];

  // Turn Number
  let turn = 0;
  header.textContent = `Turn : O`;

  // Players Points
  let playerXPoint = 0;
  let playerOPoint = 0;

  // Check Winner
  function checkWinner(value) {
    // Win
    if (
      box[0].textContent === value &&
      box[1].textContent === value &&
      box[2].textContent === value
    ) {
      return "win";
    }
    if (
      box[3].textContent === value &&
      box[4].textContent === value &&
      box[5].textContent === value
    ) {
      return "win";
    }
    if (
      box[6].textContent === value &&
      box[7].textContent === value &&
      box[8].textContent === value
    ) {
      return "win";
    }
    if (
      box[0].textContent === value &&
      box[3].textContent === value &&
      box[6].textContent === value
    ) {
      return "win";
    }
    if (
      box[1].textContent === value &&
      box[4].textContent === value &&
      box[7].textContent === value
    ) {
      return "win";
    }
    if (
      box[2].textContent === value &&
      box[5].textContent === value &&
      box[8].textContent === value
    ) {
      return "win";
    }
    if (
      box[0].textContent === value &&
      box[4].textContent === value &&
      box[8].textContent === value
    ) {
      return "win";
    }
    if (
      box[2].textContent === value &&
      box[4].textContent === value &&
      box[6].textContent === value
    ) {
      return "win";
    }

    // Tie
    if (
      box[0].textContent !== "" &&
      box[1].textContent !== "" &&
      box[2].textContent !== "" &&
      box[3].textContent !== "" &&
      box[4].textContent !== "" &&
      box[5].textContent !== "" &&
      box[6].textContent !== "" &&
      box[7].textContent !== "" &&
      box[8].textContent !== ""
    )
      return "tie";

    // Lose
    return false;
  }

  // Game Play
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", () => {
      // O player
      if (!turn) {
        box[i].textContent = initialValue[turn];

        // Check for Winner
        if (checkWinner(initialValue[turn]) === "win") {
          header.textContent = `Winner  is Player ${initialValue[turn]} 🎉 `;
          playerOPoint++;
          box.forEach((box) => {
            box.classList.add("disabled");
          });
        } else if (checkWinner(initialValue[turn]) === "tie") {
          header.textContent = `It's a Tie Oops! 😐 `;
          playerOPoint++;
          box.forEach((box) => {
            box.classList.add("disabled");
          });
        } else header.textContent = `Turn : Player X`;

        console.log(checkWinner(initialValue[turn]));

        box[i].classList.add("disabled");
        turn = 1;

        // X player
      } else {
        box[i].textContent = initialValue[turn];

        // Check for Winner
        if (checkWinner(initialValue[turn]) === "win") {
          header.textContent = `Winner  is Player ${initialValue[turn]} 🎉 `;
          playerXPoint++;
          box.forEach((box) => {
            box.classList.add("disabled");
          });
        } else if (checkWinner(initialValue[turn]) === "tie") {
          header.textContent = `It's a Tie Oops! 😐 `;
          playerOPoint++;
          box.forEach((box) => {
            box.classList.add("disabled");
          });
        } else header.textContent = `Turn : Player O`;

        console.log(checkWinner(initialValue[turn]));

        box[i].classList.add("disabled");
        turn = 0;
      }
    });
  }

  // Restart Button
  reset.addEventListener("click", () => {
    turn = 0;
    for (let i = 0; i < box.length; i++) {
      box[i].textContent = "";
    }
    box.forEach((box) => {
      box.classList.remove("disabled");
    });
    header.textContent = `Turn : O`;
  });
  console.log(box);
  // End
});
