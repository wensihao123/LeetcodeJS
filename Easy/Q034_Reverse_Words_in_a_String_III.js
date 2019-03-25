/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(word => {
        let temp=[],
            len = word.length
        word.split('').forEach((l, i)=> {
            temp[len - 1 -i]=l
        })
        return temp.join('')
    }).join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))