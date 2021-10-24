/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const visited = new Set();
    const rows = board.length, cols = board[0].length;
    let wordPtr = 0;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === word[wordPtr]) {
                let result = dfs(row, col, word[wordPtr]);
                if (result === true) return true;
            }
        }
    }
    
    function dfs(row, col, targetChar) {
        if (visited.has(row + ',' + col)) return;
        if (row < 0 || col < 0 || row >= rows || col >= cols) return;
        // console.log('I saw', board[row][col], 'at ', row, col);
        visited.add(row + ',' + col);
        
        if (board[row][col] === targetChar) {
            wordPtr++;
            if (wordPtr === word.length) return true;
            
            let newTarget = word[wordPtr]
            if (dfs(row + 1, col, newTarget) ||
               dfs(row - 1, col, newTarget) ||
               dfs(row, col + 1, newTarget) ||
               dfs(row, col - 1, newTarget)) {
                return true;
            }
            wordPtr--;
        }
        visited.delete(row + ',' + col);
        return;
    }

    return false;
};

// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB'))