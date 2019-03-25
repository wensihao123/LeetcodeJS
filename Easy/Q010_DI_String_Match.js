/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
    var forward = 0
    var backward = S.length
    var result = []
    S.split('').forEach(l => {
        if(l === 'I'){
            result.push(forward)
            forward++
        } else {
            result.push(backward)
            backward--
        }
    })
    result.push(forward)
    return result
};

console.log(diStringMatch("IDID"))