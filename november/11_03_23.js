/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * Example 1:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * Example 2:
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

 var reverseString = function(s) {
    let left = s.length-1
    let mid = Math.floor(s.length/2)
    let placeHolder = ""
    
    for(let i = 0; i < mid; i++) {
        placeHolder = s[i]
        s[i] = s[left]
        s[left] = placeHolder
        left--
    }
};