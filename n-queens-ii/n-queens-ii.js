/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n) => {
    let colSet = new Set(), diagSet = new Set(), antiDiagSet = new Set(); 
    return backtrack(0, colSet, diagSet, antiDiagSet, n);
};

const backtrack = (row, colSet, diagSet, antiDiagSet, size) => {
    // base case, N queens have been placed
    if (row === size) return 1;
    let solutions = 0;
    
    // iterate through each columns at current row
    for (let col = 0; col < size; col++) {
        let curDiag = row - col, curAntiDiag = row + col;
        // if the queen is not placeable
        if (colSet.has(col) || diagSet.has(curDiag) || antiDiagSet.has(curAntiDiag)) {
            continue;
        }
        
        // Add the queen to the board
        colSet.add(col);
        diagSet.add(curDiag);
        antiDiagSet.add(curAntiDiag);
        
        // Move on to the next row with the update board state
        solutions += backtrack(row + 1, colSet, diagSet, antiDiagSet, size);
        
        // remove the queen from the board after exploring all valid paths above
        colSet.delete(col);
        diagSet.delete(curDiag);
        antiDiagSet.delete(curAntiDiag);
    }
    
    return solutions;
}