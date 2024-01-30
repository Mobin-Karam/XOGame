document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelectorAll(".board__row__box");
  const header = document.querySelector(".header");

  let initialValue = ["O", "X"];
  const winnerStates = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  const gameState = [];

  let turn = 0;
  header.textContent = `Turn : O`;

  // Click

  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", () => {
      if (!turn) {
        box[i].textContent = initialValue[turn];
        header.textContent = `Turn : X`;
        gameState.push("O");
        console.log(gameState);
        turn = 1;
      } else {
        box[i].textContent = initialValue[turn];
        header.textContent = `Turn : O`;
        gameState.push("X");
        console.log(gameState);
        turn = 0;
      }
    });
  }
});
