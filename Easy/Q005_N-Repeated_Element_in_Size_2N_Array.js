/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    var B = A.sort((a, b) => a - b)
    let l = A.length
    return B[l / 2 - 1] === B[l / 2] ? B[l / 2] : (B[0] === B[l / 2 - 1] ? B[l / 2 - 1] : B[l / 2])
};

var repeatedNTimes1 = function (A) {
    let table = []
    var result
    A.forEach(a => {
        table[a - 1] = table[a - 1] ? table[a - 1] + 1 : 1
        if (table[a - 1] == A.length / 2) {
            result = a
            return
        }
    })
    return result
};
console.log(repeatedNTimes1([5, 1, 5, 2, 5, 3, 5, 4]))