/**
 * @param {string[]} words
 * @return {string}
 */
// Approach: Topological Sort (DAG)
var alienOrder = function(words) {
    let graph = {};
    words.forEach((word)=>{word.split('').forEach((char)=>graph[char]=[])}); // initialize graph entry for every character
	// build the relationship graph
    for (let i=0;i<words.length-1;i++) {
        let top = words[i];
        let down = words[i+1];
        let minLength = Math.min(top.length, down.length);
        for (let j=0;j<minLength;j++) {
            if (top[j]!=down[j]) {
                graph[top[j]].push(down[j]);
                break; // only need to find the first pair
            }
            if(top.length > down.length && top.startsWith(down)) return "";

        }
    } 
    let visiting = new Set(), visited = new Set(), result = [];
	// regular graph dfs
    var dfs = function(char) {
        if (visiting.has(char)) return false;
        if (visited.has(char)) return true;
        visiting.add(char);
        for (let n of graph[char]) {
            if (!dfs(n)) return false;
        }
        visiting.delete(char);
        visited.add(char);
        result.push(char);
        return true;
    }

    for ([key, val] of Object.entries(graph)) {
        if (!dfs(key)) return "";
    }
    return result.reverse().join('');
};

