/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let j = J.split('')
    let s = S.split('')
    while(j.length) {
        let key = j.pop()
        s = s.filter(i => {
           return i != key
        })
    }
    return S.length - s.length
};

var numJewelsInStones1 = function(J, S) {
    return S.split('').filter(i => J.includes(i)).length
};

console.log(numJewelsInStones('aA', 'aaaAABbbCCccDDdd'));
console.log(numJewelsInStones1('aA', 'aaaAABbbCCccDDdd'));