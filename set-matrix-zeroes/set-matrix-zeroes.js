/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let r = matrix.length, c = matrix[0].length;
    let rows = new Set();
    let cols = new Set();
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (rows.has(i) || cols.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    
};