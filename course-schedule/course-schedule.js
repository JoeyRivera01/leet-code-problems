/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


var canFinish = function(numCourses, prerequisites) {
    const graph = new Map();
    const visited = new Set();
    const visiting = new Set();
    
    for (let [course, preReq] of prerequisites) {
        if(!graph.has(preReq)){
            graph.set(preReq,[course])
        } else {
            graph.get(preReq).push(course);
        }
    }
    
    for(let [course,preReq] of prerequisites){
        if(dfs(preReq)){
            return false
        }
    }
    return true
    
    function dfs(node) {
        visiting.add(node); 

        if(graph.has(node)){
            const children = graph.get(node);
            for(let child of children){
                if(visited.has(child)){
                    continue;
                }
                if(visiting.has(child)){
                    return true;
                }
                if(dfs(child)){
                    return true
                }
            }

        }
        visiting.delete(node)
        visited.add(node)
        return false
    }
};

