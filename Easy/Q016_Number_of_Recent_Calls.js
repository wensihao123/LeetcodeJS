var RecentCounter = function() {
    this.callQueue = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.callQueue.push(t)
    while(t - this.callQueue[0] > 3000) {
        this.callQueue.shift()
    }
    return this.callQueue.length
};


// var obj = Object.creat(RecentCounter.prototype)
// var param_1 = obj.ping(1)
// var param_2 = obj.ping(100)
// var param_3 = obj.ping(3001)
// var param_4 = obj.ping(3002)


// console.log([param_1,param_2,param_3,param_4])
/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */