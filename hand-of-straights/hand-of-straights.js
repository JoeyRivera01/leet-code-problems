/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    if(hand.length % groupSize) return false;
    
    const map = hand.reduce((map, curr) => map.set(curr, map.get(curr) + 1 || 1), new Map());
    
    const checkValid = key => {
        let count = map.get(key);
        while(count) {
            for(let i = key; i < key + groupSize; i++) {
                if(!map.has(i)) return false;
                else if (map.get(i) === 1) map.delete(i);
                else map.set(i, map.get(i) - 1);
            }
            count--;
        }
        return true;
    }
    
    return [...map.keys()].sort((a, b) => a - b).every(k => checkValid(k));
};