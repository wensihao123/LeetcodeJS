/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(row => {
        let resultRow = []
        row.forEach((n,i) => {
            resultRow[row.length - 1 - i] = n ? 0 : 1
        })
        return resultRow
    })
};

console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))