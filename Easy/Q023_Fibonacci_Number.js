/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let n = 0, m = 1, i = 1
    if(N < 2) return N
    else {
        while(i < N) {
            let temp = n + m
            n = m
            m = temp
            i++
        }
        return m
    }
};

console.log(fib(4))