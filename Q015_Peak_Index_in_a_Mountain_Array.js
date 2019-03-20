/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let peak = 0
    let peakIndex = 0
    A.forEach((n, i) => {
        if(n > peak) {
            peak = n;
            peakIndex = i
        }
    })
    return peakIndex
};

console.log(peakIndexInMountainArray([0,1,0]))