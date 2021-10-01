/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, D) {
    let n = jobDifficulty.length, inf = Infinity, maxd;
    
    if (n < D) return -1;
    
    let dp = new Array(n + 1).fill(Infinity);
    dp[n] = 0;
    
    for (let d = 1; d <= D; d++) {
        for (let i = 0; i <= n - d; i++) {
            maxd = 0, dp[i] = inf;

            for (let j = i; j <= n - d; j++) {
                maxd =  Math.max(maxd, jobDifficulty[j]);
                dp[i] = Math.min(dp[i], maxd + dp[j + 1]);
            }
        }
    }
    
    return dp[0];
};