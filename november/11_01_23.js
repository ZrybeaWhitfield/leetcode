/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/745/
 * Given an integer n, return true if it is a power of three. Otherwise, return false. An integer n is a power of three, if there exists an integer x such that n == 3x.
 * Example 1:
 * Input: nums = n = 27
 * Output: true
 * Example 2:
 * Input: n = 0
 * Output: false
 * Example 3:
 * Input: n = -1
 * Output: false
 * @param {number} n
 * @return {boolean}
 */

 var isPowerOfThree = function(n) {
    if (n <= 0){
        return false
    }
    
    let i = 0
    let tracker = 0

    while(tracker <= n){
        tracker = Math.pow(3,i)
        
        if(tracker === n){
            return true
        }
        
        i++
    }
    
    return false
};