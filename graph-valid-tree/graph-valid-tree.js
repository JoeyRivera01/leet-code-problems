/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */


const validTree = (n, edges) => {
    const DisjoinSet = function(n) {
        let parent = {};
        let size = {};
        this.count = n;
        
        for (let i = 0; i < n; i++) {
            parent[i] = i;
            size[i] = 1;
        }
        
        this.find = (x) => {
            if (parent[x] === x) return x;
            // use recursion to compress path
            parent[x] = this.find(parent[x]);
            return parent[x];
        }
        
        this.union = (x, y) => {
            let rootX = this.find(x);
            let rootY = this.find(y);
            
            if (rootX === rootY) return false;
            if (size[rootX] > size[rootY]) {
                size[rootX] += size[rootY];
                parent[rootY] = rootX;
            } else {
                size[rootY] += size[rootX];
                parent[rootX] = rootY;
            }
            this.count--;
            return true;
        }
    }
    const ds = new DisjoinSet(n);
    for (let edge of edges) {
        if (!ds.union(edge[0], edge[1])) return false;
    }
    return ds.count === 1;
}