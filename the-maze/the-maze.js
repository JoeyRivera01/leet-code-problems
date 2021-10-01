/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
// approach dfs
// time complexity: O(mn) Complete traversal of maze will be done in the worst case. Here, m and nn refers to the number of rows and coloumns of the maze.
// space complexity: visited array of size m*nm∗n is used.
const hasPath = (maze, start, destination) => {
    if (start[0] === destination[0] && start[1] === destination[1]) {
        return true;
    }

    const m = maze.length;
    const n = maze[0].length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    for (let [dx, dy] of dirs) {
        let i = start[0], j = start[1];
				
        // Keep rolling in the current direction till hit a wall (or border)
        while (i >= 0 && i < m && j >= 0 && j < n && maze[i][j] !== 1) {
            i += dx; j += dy;
        }
				
        // One step back
        i -= dx; j -= dy;
				
        // Check if it's visited
        if (maze[i][j] !== 0) continue;
				
        // Mark as visited
        maze[i][j] = 2;
				
        // Continue rolling (or search) from [i, j]
        if (hasPath(maze, [i, j], destination)) {
            return true;
        }
    }
    
    return false;
};