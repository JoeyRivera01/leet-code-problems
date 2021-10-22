/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const rows = heights.length, cols = heights[0].length;
    const pac = new Set(), atl = new Set();
    
    function dfs(row, col, visited, prevHeight) {
        // check if visited or out of bounds or the less than prev height
        let currPos = row + '#' + col
        if (visited.has(currPos)) {
            return;
        }
        if (col < 0 || row < 0 || row >= rows || col >= cols) return;
        if (heights[row][col] < prevHeight) return;
        
        // add to visited
        visited.add(currPos);
        
        // dfs adj cells
        dfs(row + 1, col, visited, heights[row][col]);
        dfs(row - 1, col, visited, heights[row][col]);
        dfs(row, col + 1, visited, heights[row][col]);
        dfs(row, col - 1, visited, heights[row][col]);
    }
    
    // iterate through the cols
    for (let col = 0; col < cols; col++) {
        dfs(0, col, pac, 0);
        dfs(rows - 1, col, atl, 0);
    }
    
    // iterate through the rows
    for (let row = 0; row < rows; row++) {
        dfs(row, 0, pac, heights[row][0]);
        dfs(row, cols - 1, atl, heights[row][cols - 1]);
    }
    
    let intersect = new Set([...pac].filter(coord => atl.has(coord)));
    let result = [...intersect].map(coord => {
        let [x, y] = coord.split('#');
        return [Number(x), Number(y)]
    })
    
    return result;
};