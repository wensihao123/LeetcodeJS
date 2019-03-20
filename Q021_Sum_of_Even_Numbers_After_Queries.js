/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
    return queries.map(q => {
        A[q[1]] += q[0]
        return A.reduce((r, i) => i % 2 === 0 ? r + i : r, 0)
    })
};

console.log(sumEvenAfterQueries([1, 2, 3, 4], [
    [1, 0],
    [-3, 1],
    [-4, 0],
    [2, 3]
]))