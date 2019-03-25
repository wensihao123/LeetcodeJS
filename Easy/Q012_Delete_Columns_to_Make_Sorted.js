/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
    let table = []
    count = 0
    A.forEach((word, i) => {
        word.split('').forEach((char, j) => {
            if (table[j]) {
                if (i > 0 && char < table[j][i - 1]) count++
                else if (table[j][i - 1]) table[j] += char
            } else table[j] = char
        })
    })
    return count
};

console.log(minDeletionSize(["zyx","wvu","tsr"]))