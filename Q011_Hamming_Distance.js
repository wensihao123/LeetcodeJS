/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var z = x^y
    var count = 0
    while(z){
        if(z%2 === 1)count++
        z = z >>> 1
    }
    return count
};

console.log(hammingDistance(1,4))