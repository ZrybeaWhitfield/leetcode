/**
 * https://leetcode.com/explore/featured/card/top-interview-questions-easy/127/strings/883/
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 * Example 3:
 * Input: s = " "
 * Output: true
 * @param {string} s
 * @return {boolean}
 */

 var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase().split("")
    let end = s.length - 1
    
    for(let i = 0; i < s.length/2; i++) {
        if(s[i] !== s[end]) {
           return false
           }
        end--
    }
    return true
};