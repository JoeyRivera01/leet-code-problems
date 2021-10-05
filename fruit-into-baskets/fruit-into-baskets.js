/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    if (fruits === null || fruits.length === 0) {
        return 0;
    }
    
    let max = 1;
    // maps the type of fruit and where it occured in the array
    let map = new Map();
    let i = 0, j = 0;
    
    while (j < fruits.length) {
        if (map.size <= 2) {
            map.set(fruits[j], j++);
        }
        
        if (map.size > 2) {
            let min = fruits.length - 1;
            for (let value of map.values()) {
                min = Math.min(min, value);
            }
            i = min + 1;
            map.delete(fruits[min]);
        }
        
        max = Math.max(max, j - i);
    }
    
    return max;
};