/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let AT = []
    A.forEach((row, ir) => {
        row.forEach((col, ic) => {
            if(!AT[ic])AT[ic] = []
            AT[ic][ir] = col
        })
    })
    return AT
};

console.log(transpose([[1,2,3],[4,5,6]]))