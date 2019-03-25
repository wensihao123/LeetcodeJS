/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let i = 0,
        j = 0,
        to = -1,
        te = -1
    while ((2 * i) < A.length && (2 * j + 1) < A.length) {
        if (A[2 * i] % 2 !== 0) te = A[2 * i]
        else i++
        if (A[2 * j + 1] % 2 !== 1) to = A[2 * j + 1]
        else j++
        if (to !== -1 && te !== -1) {
            A[2 * i] = to
            A[2 * j + 1] = te
            to = -1
            te = -1
            i++
            j++
        }
    }
    return A
};

console.log(sortArrayByParityII([4,2,5,7]))