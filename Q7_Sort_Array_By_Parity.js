/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    var result = []
    var forward = 0
    var backward = 0
    A.forEach(n => {
        if(n%2 === 0){
            result[forward] = n
            forward ++
        } else {
            result[A.length - 1 - backward] = n
            backward ++
        }
    })
    return result
}

console.log(sortArrayByParity([3,1,2,4,7,8,11,9,5]))