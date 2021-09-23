/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const target = graph.length - 1;
    const paths = [];
    
    const dfs = (node, path) => {
        path.push(node);
        
        // if we reached the target, we found a path
        if (node === target) {
            paths.push(path);
            return;
        }
        
        for (const edge of graph[node]) {
            dfs(edge, [...path]);
        }
    }
    
    dfs(0, []);
    
    return paths;
};