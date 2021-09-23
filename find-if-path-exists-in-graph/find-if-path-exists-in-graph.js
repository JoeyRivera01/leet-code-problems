/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */

var validPath = function(n, edges, start, end) {
    const graph = new Map();
    // Create a set to store our visited nodes
    const visited = new Set();
    
    // Build adjacency list
    for (let [v, e] of edges) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        if (graph.has(e)) {
            graph.get(e).push(v);
        } else {
            graph.set(e, [v]);
        }
    }
    
    const bfs = (node) => {
        // set the first value as the first queue
        let queue = [node];
        
        visited.add(node);
        
        while (queue.length > 0) {
            if (visited.has(end)) return;
            
            const currNode = queue.shift();
            const edges = graph.get(currNode);
            
            if (edges && edges.length > 0) {
                edges.forEach( e => {
                    if (!visited.has(e)) {
                        visited.add(e);
                        queue.push(e)
                    }
                });
            }
        }
    };
    bfs(start);
    return visited.has(end);
};
