/**
 * @param {string} compressedString
 */
class StringIterator{
    constructor(compressedString){
        this.str = compressedString;
        this.ptr = 0;
        this.count = 0;
        this.char = " ";
    }
    next(){
        if (!this.hasNext()) return " ";
        if (this.count === 0){
            this.char = this.str.charAt(this.ptr);
            this.ptr++;
        
            while (this.ptr < this.str.length && this.isDigit(this.str.charAt(this.ptr))){
                this.count = this.count * 10 + (this.str.charAt(this.ptr)*1);
                this.ptr++;
            }
        }
        this.count--;
        return this.char;
    }
    hasNext(){
        return (this.ptr < this.str.length || this.count !== 0);
    }
    isDigit(char){
        // let digit = '1234567890'
        // return digit.includes(char);
        return (char >= '0' && char <= '9');
    }
}
/** 
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */