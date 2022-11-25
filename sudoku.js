/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  let arrPuzzle = [
    (puzzle_1 = boardString.slice(0, 9).split('')),
    (puzzle_2 = boardString.slice(9, 18).split('')),
    (puzzle_3 = boardString.slice(18, 27).split('')),
    (puzzle_4 = boardString.slice(27, 36).split('')),
    (puzzle_5 = boardString.slice(36, 45).split('')),
    (puzzle_6 = boardString.slice(45, 54).split('')),
    (puzzle_7 = boardString.slice(54, 63).split('')),
    (puzzle_8 = boardString.slice(63, 72).split('')),
    (puzzle_9 = boardString.slice(72, 81).split('')),
  ];
  const size = arrPuzzle.length;
  const box = 3;
  function tireFound(arrPuzzle) {
    for (i = 0; i < arrPuzzle.length; i += 1) {
      for (j = 0; j < arrPuzzle[i].length; j += 1) {
        if (arrPuzzle[i][j] === '-') {
          return [i, j];
        }
      }
    }
    return null;
  }

  const letChecking = (num, pos, arrPuzzle) => {
    const [i, j] = pos;

    for (let x = 0; x < arrPuzzle.length; x += 1) {
      if (arrPuzzle[x][j] === num && x !== i) {
        return false;
      }
    }

    for (let x = 0; x < arrPuzzle.length; x += 1) {
      if (arrPuzzle[i][x] === num && x !== j) {
        return false;
      }
    }

    const boxLine = Math.floor(i / box) * box;
    const boxColumn = Math.floor(j / box) * box;

    for (let k = boxLine; k < boxLine + box; k++) {
      for (let l = boxColumn; k < boxColumn + box; l++) {
        if (arrPuzzle[k][l] === num && k !== i && l !== j) {
          return false;
        }
      }
    }
    return true;
  };
  console.log(boxLine);
}



/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
