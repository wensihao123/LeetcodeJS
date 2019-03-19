/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const mTable = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let results = []
    for (i in words) {
        var mosChar = words[i].split('').map(c => mTable[c.charCodeAt() - 97])
        var mosString = mosChar.join('')
        if(!results.includes(mosString)) results.push(mosString)
    }
    return results.length
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))