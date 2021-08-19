const climbStairs = function(n) {
    // time complexity: O(n). Single loop up to n
    // space complexity: O(n). dp array of size n is used
    
    if (n === 1) {
        return 1;
    }
    
    let arr = [n + 1];
    arr[1] = 1;
    arr[2] = 2;
    
    for (i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    
    return arr[n];
};