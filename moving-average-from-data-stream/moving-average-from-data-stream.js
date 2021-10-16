/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.window = new Array();
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.window.length === this.size) {
        this.window.shift();
    }
    this.window.push(val);
    let sum = 0;
    
    for (let val of this.window) {
        sum += val;
    }
    
    return sum / this.window.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */