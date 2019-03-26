/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    let pos = []
    S.split('').forEach((char, index) => {
        if (char === C) pos.push(index)
    })
    let i = 0,
        k = 0
    let left = -Infinity,
        right = pos[i]
    let result = [];
    while (k < S.length) {
        if (k <= right) {
            result.push(Math.min(k - left, right - k))
            k++
        } else {
            left = pos[i]
            right = pos[i + 1] ? pos[i + 1] : Infinity
            i++
        }
    }
    return result
};

console.log(shortestToChar("loveleetcode", 'e'))