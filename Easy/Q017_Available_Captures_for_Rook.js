/**
 * @param {character[][]} board
 * @return {number}
 */
const board = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    ["p", "p", ".", "R", ".", "p", "B", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."]
]
var findRook = (board) => {
    let count = 0
    while (board[Math.floor(count / 8)][count % 8] != 'R') count++
    return count
}
var numRookCaptures = function (board) {
    let R = findRook(board)
    let x = R % 8,
        y = Math.floor(R / 8)
    let countU = 0,
        countD = 0,
        countL = 0,
        countR = 0
    let count = 0
    let d = 1,
        dMax = Math.max(x, y, 7 - x, 7 - y)
    do {
        if (y - d >= 0)(board[y - d][x] === 'p' && countU === 0) ? countU++ : ((board[y - d][x] === 'B' && countU === 0) ? countU-- : null);
        if (y + d <= 8)(board[y + d][x] === 'p' && countD === 0) ? countD++ : ((board[y + d][x] === 'B' && countD === 0) ? countD-- : null);
        if (x - d >= 0)(board[y][x - d] === 'p' && countL === 0) ? countL++ : ((board[y][x - d] === 'B' && countL === 0) ? countL-- : null);
        if (x + d <= 8)(board[y][x + d] === 'p' && countR === 0) ? countR++ : ((board[y][x + d] === 'B' && countR === 0) ? countR-- : null);
        d++
    } while (d < dMax)[countU, countD, countL, countR].forEach(i => {
        if (i === 1) count++
    })
    return count
};

console.log(numRookCaptures(board))