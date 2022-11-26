/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(string) {
  const arrBoard = stringToArr(string);

  step = () => {
    const size = 9;
    const boxSize = 3;
    const currPos = findEmptySpace(arrBoard);
    if (currPos === null) {
      return true;
    }
    for (let num = 1; num <= size; num++) {
      const isValid = validate(currPos, arrBoard, num, (sizeBox = boxSize));
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
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции step.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(arrBoard) {
  arrBoard.every((line) => {
    if (line.reduce((a, b) => a + Number(b), 0) !== 45) return false;
  });

  for (let i = 0; i < arrBoard.length; i++) {
    const result = [];

    for (let j = 0; j < arrBoard.length; j++) {
      result.push(arrBoard[j][i]);
    }

    if (result.reduce((a, b) => a + Number(b), 0) !== 45) {
      return false;
    }
  }

  if (
    arrToString(arrBoard)
      .split("")
      .reduce((a, b) => a + Number(b), 0) !== 405
  ) {
    return false;
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  const stringBoard = arrToString(board);
  let result = stringBoard.match(/.{9}/g).map((el) => {
    el = el.split("");
    el.unshift("|");
    el.push("|");
    el.splice(4, 0, "|");
    el.splice(8, 0, "|");
    return el;
  });
  const border = "----{}-------{}-------{}";
  result = result.map((el) => el.join(" "));
  result.unshift(border);
  result.push(border);
  result.splice(4, 0, border);
  result.splice(8, 0, border);
  return result.join("\n");
}

function stringToArr(boardString) {
  const re = /.{9}/g;
  return boardString.match(re).map((line) => {
    return line.split("");
  });
}

function findEmptySpace(arrBoard) {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (arrBoard[y][x] === "-") {
        return [y, x];
      }
    }
  }
  return null;
}

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
