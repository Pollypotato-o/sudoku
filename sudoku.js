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
  console.table(arrPuzzle);

  for (let i = 0; i < 8; i += 1) {
    for (let j = i; j < 9; j++) {}
  }
}
console.log(
  solve(
    '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
  )
);
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
