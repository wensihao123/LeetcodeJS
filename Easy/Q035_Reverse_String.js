/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let len = s.length
    if (len > 1) {
        for (let i = 0; i < Math.floor(len / 2); i++) {
            let temp = s[i];
            s[i] = s[len - 1 - i];
            s[len - 1 - i] = temp;
        }
    }
    console.log(s)
};

reverseString(["\""])