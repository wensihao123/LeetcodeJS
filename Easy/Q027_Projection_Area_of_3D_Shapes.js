/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let base = 0,
        rowArea = 0,
        colArray = [],
        colArea = 0
    grid.forEach(row => {
        rowArea += Math.max(...row)
        row.forEach((col, i) => {
            if (col) base++
            if (!colArray[i]) colArray[i] = col
            else if (colArray[i] < col) colArray[i] = col
        })
    })
    colArea = colArray.reduce((a, c) => a + c)
    return base+rowArea+colArea
};

console.log(projectionArea([[1,1,1],[1,0,1],[1,1,1]]))