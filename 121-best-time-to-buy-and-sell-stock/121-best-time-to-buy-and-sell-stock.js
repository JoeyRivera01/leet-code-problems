/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let lowestPriceSoFar = Infinity;
    
    prices.forEach((price) => {
        lowestPriceSoFar = Math.min(price, lowestPriceSoFar);
        maxProfit = Math.max(price - lowestPriceSoFar, maxProfit);
    });
    
    return maxProfit;
};