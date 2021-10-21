const climbStairs = function(n) {
    // time complexity: O(n). Single loop up to n
    // space complexity: O(n). dp array of size n is used
    
    if (n === 1) {
        return 1;
    }
    
    let arr = [];
    console.log(arr);
    
    arr[0] = 1;
    arr[1] = 2;
    console.log(arr);
    
    
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
        console.log(arr);  
    }
    
    return arr[n - 1];
};

climbStairs(30);