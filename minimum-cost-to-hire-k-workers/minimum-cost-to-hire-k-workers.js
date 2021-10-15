/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, K) {
    let n  = quality.length;
    let workers = Array(n);
    for (let i=0;i<n;i++) {
        workers[i] = [wage[i]/quality[i], quality[i]];
    }
    workers.sort((a,b)=>a[0]-b[0]===0?a[1]-b[1]: a[0]-b[0]);
    let qsum = 0, res=Number.MAX_SAFE_INTEGER;
    let pq = new MaxPriorityQueue();
    for (let i=0;i<workers.length;i++) {
        qsum+=workers[i][1];
        pq.enqueue(workers[i][1]);
        if (pq.size() > K) {
            qsum-=pq.front().element;
            pq.dequeue();
        }
        if (pq.size()===K) {
            res = Math.min(res, qsum*workers[i][0])
        }
    }
    return res;
};