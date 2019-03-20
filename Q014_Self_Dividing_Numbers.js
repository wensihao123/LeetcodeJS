/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var testSDN = (num) => {
    let n = num
    let digits = []
    let flag = true
    while (n) {
        let digit = n % 10
        if (digit === 0) return false
        else digits.push(digit)
        n = Math.floor(n / 10)
    }
    digits.forEach(i => {
        if(num % i !== 0) flag = false
    })
    return flag
}
var selfDividingNumbers = function (left, right) {
    let output = []
    for(let i = left; i<=right; i++){
        if(testSDN(i)) output.push(i)
    }
    return output
};

console.log(selfDividingNumbers(1,22))