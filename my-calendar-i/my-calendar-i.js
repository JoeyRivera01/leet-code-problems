var MyCalendar = function() {
    this.root = null;
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */

function Node(start, end){
    this.s = start;
    this.e = end;
    this.left = null;
    this.right = null;
}

MyCalendar.prototype.book = function(start, end) {
    if(!this.root) {
       return this.root = new Node(start, end);
    }
    else{
        let rec = (start, end, root) => {
            if(root.e<=start){
                if(root.right) return rec(start, end, root.right);
                else{
                    root.right = new Node(start, end);
                    return true;
                }
            }
            else if(root.s>=end){
                if(root.left) return rec(start, end, root.left);
                else{
                    root.left = new Node(start, end);
                    return true;
                }
            }
            else{
                return false;    
            }
        }
        return rec(start, end, this.root);
    }
};

