/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
    if (!digits.length) return [];
    
    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    
    const allCombos = [];
    const permute = (index, string) => {
        // base case
        if (index === digits.length) {
            allCombos.push(string);
            return;
        }
        
        for (let c of map[digits[index]]) {
            permute(index + 1, string + c);
        }
    }
    permute(0, '');
    return allCombos;
}