/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const size = 9;
const boxSize = 3;
function solve(string) {
  const arrBoard = stringToArr(string);
  step = () => {
    const currPos = findEmptySpace(arrBoard);
    if (currPos === null) {
      return true;
    }
    for (let num = 1; num <= size; num += 1) {
      const isValid = validate(currPos, arrBoard, num);
      if (isValid) {
        const [y, x] = currPos;
        arrBoard[y][x] = String(num);
        if (step()) {
          return true;
        }
        arrBoard[y][x] = "-";
      }
    }
    return false;
  };
  step();
  return arrBoard;
}

function findEmptySpace(arrBoard) {
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      if (arrBoard[y][x] === "-") {
        return [y, x];
      }
    }
  }

  return null;

function validate(currPos, arrBoard, num, boxSize) {
  const [y, x] = currPos;

  for (let i = 0; i < arrBoard.length; i++) {
    if (Number(arrBoard[y][i]) === num && i !== x) {
      return false;
    }
  }

  for (let i = 0; i < arrBoard.length; i++) {
    if (Number(arrBoard[i][x]) === num && i !== y) {
      return false;
    }
  }

  const firstBlockOfBoxY = Math.floor(y / boxSize) * boxSize;
  const firstBlockOfBoxX = Math.floor(x / boxSize) * boxSize;

  for (let i = firstBlockOfBoxY; i < boxSize + firstBlockOfBoxY; i++) {
    for (let j = firstBlockOfBoxX; j < boxSize + firstBlockOfBoxX; j++) {
      if (arrBoard[i][j] == num && i !== y && j !== x) {
        return false;
      }
    }
  }
  return true;
}
function arrToString(stepdBoardArr) {
  return stepdBoardArr
    .map((line) => {
      return line.join("");
    })
    .join("");
}

// Экспортировать функции для использования в другом файле (например, readAndstep.js).

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
