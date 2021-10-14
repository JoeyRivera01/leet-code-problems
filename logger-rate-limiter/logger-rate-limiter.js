
var Logger = function() {
    // key = message, value = last time called
    this.timestampMap = {};
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.timestampMap[message] === undefined || this.timestampMap[message] + 10 <= timestamp) {
        this.timestampMap[message] = timestamp;
        return true;
    } else {
        return false;
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */