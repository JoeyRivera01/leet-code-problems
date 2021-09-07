/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function(isConnected) {
  // visited set
  let visited = new Set();
  // num of provinces
  let provinces = 0;
  // iterate through matrix
  for (let i = 0; i < isConnected.length; i++) {
    // check if node has been visited
    if (!visited.has(i)) {
      // start dfs starting with current node
      dfs(isConnected, visited, i);
      // add a new province
      provinces++
    }
  }
  return provinces;
};

// helper method to do dfs traversal through the matrix
const dfs = function(matrix, visited, i) {
  // go through connected nodes
  for (let j = 0; j < matrix.length; j++) {
    // check if this node is a connection and has not been visited before
    if (matrix[i][j] === 1 && !visited.has(j)) {
      // add as visited
      visited.add(j);
      // call dfs on current node
      dfs(matrix, visited, j);
    }
  }
}
