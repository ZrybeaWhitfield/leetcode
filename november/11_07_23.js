/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * Example 1:
 * Input: x = 123
 * Output: 321
 * Example 2:
 * Input: x = -123
 * Output: -321
 * Example 3:
 * Input: x = 120
 * Output: 21
 * @param {number} x
 * @return {number}
 */

 var reverse = function(x) {
    
    let reversed = []
    let isNeg = false
    
    if(Math.sign(x) == -1) isNeg = true
    x = String(x).split("")
    if(isNeg) x.shift()
    
    for(let i = 0; i<x.length; i++){
        reversed.unshift(x[i])
    }
    
    if(isNeg){
        reversed.unshift("-")
    }
    
    let result = Number(reversed.join("") )
    
    return Math.pow(2, 31) - 1 < result || result < Math.pow(-2, 31) ? 0 : result
    
    
    
};