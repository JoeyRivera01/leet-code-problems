/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */

// time complexity: O(N - M) where N is the number of cells in the room and M is a number of obstacles.
// space complexity: O(N - M) where N is the number of cells in a room and M is the number of obstacles.
var cleanRoom = function(robot) {
    const visited = {};
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    const goBack = () => {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
    }
    
    const backtrack = (row, col, direction) => {
        visited[[row, col]] = true;
        robot.clean();
        // going clockwise: 0: up, 1: right, 2: down, 3: left
        for (let i = 0; i < 4; i++) {
            let newDirection = (direction + i) % 4;
            let newRow = row + directions[newDirection][0];
            let newCol = col + directions[newDirection][1];
            
            if (!visited[[newRow, newCol]] && robot.move()) {
                backtrack(newRow, newCol, newDirection);
                goBack();
            }
            // turn the robot following chosen direction : clockwise
            robot.turnRight();
        }
    }
    backtrack(0, 0, 0);
};