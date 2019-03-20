/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let wA0 = []
    A.forEach((word, i) => {
        if (i === 0) {
            wA0 = word.split('').sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0))
        } else {
            let wAt = word.split('').sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0))
            let base = wA0.map(i => i)
            let temp = []
            let length = base.length + wAt.length
            for(let j = 0; j<length; j++) {
                if(base.length && base[0] === wAt[0]) {
                    temp.push(base.shift())
                    wAt.shift()
                } else if((base.length ? base[0].charCodeAt(0) : 0) > (wAt.length ? wAt[0].charCodeAt(0) : 0)) {
                    wAt.shift()
                } else {
                    base.shift()
                }
            }
            wA0 = temp
        }
    })
    return wA0
};

console.log(commonChars(["bbddabab","cbcddbdd","bbcadcab","dabcacad","cddcacbc","ccbdbcba","cbddaccc","accdcdbb"]))