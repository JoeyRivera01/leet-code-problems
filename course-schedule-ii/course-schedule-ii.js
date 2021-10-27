/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// Time Complexity: O(v + e) where v is the number of vertices and E is the number of edges
// Space complexity: O(v + e) for the queue and adjacency list.

var findOrder = function(numCourses, prerequisites) {
    if (numCourses === 1) return [0];
    
    const visited = new Set(); // track nodes we've visited globally
    const courseMap = new Map();
    const topSortArr = [];
    
    // create adj list
    for (let [course, prereq] of prerequisites) {
        if (!courseMap.has(course)) courseMap.set(course, []);
        courseMap.get(course).push(prereq);
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!topSort(i)) return [];
    }
    
    
    function topSort(course, visiting = new Set()) {
        if (visiting.has(course)) return false;
        if (visited.has(course)) return true;
        
        if (courseMap.has(course)) {
            visiting.add(course);
            for (let preq of courseMap.get(course)) {
                if (!topSort(preq, visiting)) return false;
            }
            visiting.delete(course);
        }
        
        topSortArr.push(course);
        visited.add(course);
        return true;
    }
    
    // return the topological ordering by reversing the result;
    return topSortArr;
};
