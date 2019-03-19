/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    var x = 0
    var y = 0
    moves.split('').forEach(m => {
        switch(m){
            case 'U': 
                y++
                break;
            case 'D': 
                y--
                break;
            case 'L': 
                x++
                break;
            default: 
                x--
                break;
        }
    })
    return !(x||y)
};

console.log(judgeCircle('UDLLURRD'))