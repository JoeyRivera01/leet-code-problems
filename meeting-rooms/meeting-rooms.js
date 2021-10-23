/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let end = -Infinity;
    
    for (let interval of intervals) {
        if (end > interval[0]) {
            return false;
        } else {
            end = interval[1];
        }
    }
    return true;
};