/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    result = str.split('').map(i => i.charCodeAt() > 64 && i.charCodeAt() < 91 ? String.fromCharCode(i.charCodeAt() + 32) : i)
    return result.join('')
};

var toLowerCase1 = function(str) {
    for (i in str) {
        str.charAt(i).charCodeAt() > 64 && str.charAt(i).charCodeAt() < 91 ? str = str.replace(str.charAt(i), String.fromCharCode(str[i].charCodeAt() + 32)) : null
    }
    return str
};

console.log(toLowerCase('HellO'))
console.log(toLowerCase1('HellO'))