/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let frontScore = 0;
    let rearScore = 0;
    let n = cardPoints.length;
    
    for (let i = 0; i < k; i++) {
        frontScore += cardPoints[i];
    }
    
    // take all k cards from the beginning
    let maxScore = frontScore;
    
    // take j from the beginning and k - j from the end
    for (let j = k - 1; j >= 0; j--) {
        rearScore += cardPoints[n - (k - j)];
        frontScore -= cardPoints[j];
        let currentScore = rearScore + frontScore;
        maxScore = Math.max(currentScore, maxScore);
    }
    
    return maxScore;
};