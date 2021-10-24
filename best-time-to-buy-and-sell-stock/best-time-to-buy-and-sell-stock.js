/**
 * @param {number[]} prices
 * @return {number}
 */
// time complexity O(n), only a single pass is needed
// space complexity O(1), only two variables are used

const maxProfit = (prices) => {
    let profit = 0;
    let min = prices[0];
    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return profit;
}