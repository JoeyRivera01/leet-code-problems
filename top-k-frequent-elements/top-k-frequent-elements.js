/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // build a map that counts the numbers
    const numCountMap = nums.reduce((map, num) => map.set(num, map.get(num) + 1 || 1), new Map());
    // console.log(numCountMap);
    
    const minPQ = [];
    for (let [num, count] of numCountMap.entries()) {
        if (minPQ.length < k) {
            minPQ.push([num, count]);
            minPQ.sort((a, b) => b[1] - a[1]); // smallest elements at end for pop()
            // console.log(minPQ);
        } else {
            let topCount = minPQ[minPQ.length - 1][1];
            if (topCount < count) {
                minPQ.pop();
                minPQ.push([num, count]);
                minPQ.sort((a, b) => b[1] - a[1]); // smallest elements at end for pop()
            }
        }
    }
    
    for (let i = 0; i < minPQ.length; i++) {
        minPQ[i].pop();
    }
    
    return minPQ;
};