/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sorted = nums.sort((a,b) => a-b)
    let count = 0
    sorted.forEach((n, i) => {
        if(i%2 === 0) count += n
    })
    return count
};

console.log(arrayPairSum([1,4,3,2]))