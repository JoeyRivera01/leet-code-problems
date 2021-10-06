/**
 * @param {character[][]} grid
 * @return {number}
 */
//Time complexity: O(M * N) where M is the number of rows and N is the number of columns
//Space complexity: O(M*N) in case that the gride is filled with lands where DFS goes M * N deep

const numIslands = (grid) => {
    if (grid === null || grid.length === 0) return 0;
    
    let numOfIslands = 0;
    let numRows = grid.length;
    let numColumns = grid[0].length;
    
    
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numColumns; col++) {
            if (grid[row][col] === '1') {
                numOfIslands++;
                dfs(row, col);
            }
        }
    }
    
    function dfs(row, col) {
        if (row < 0 || col < 0 || row >= numRows || col >= numColumns || grid[row][col] === '0') {
            return;
        }
        
        grid[row][col] = '0';
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }
    
    return numOfIslands;
}














// const dfs = (grid, r, c) => {
//   let nr = grid.length;
//   let nc = grid[0].length;

//   if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] === '0') {
//     return;
//   }

//   grid[r][c] = '0';
//   dfs(grid, r - 1, c);
//   dfs(grid, r + 1, c);
//   dfs(grid, r, c - 1);
//   dfs(grid, r, c + 1);
// };

// const numIslands = function(grid) {
//   if (grid === null || grid.length === 0) {
//     return 0;
//   }
  
//   let nr = grid.length;
//   let nc = grid[0].length;
//   let numIslands = 0;
//   for (let r = 0; r < nr; r++) {
//     for (let c = 0; c < nc; c++) {
//       if (grid[r][c] === '1') {
//         numIslands++;
//         dfs(grid, r, c);
//       }
//     }
//   }
  
//   return numIslands;
// };

