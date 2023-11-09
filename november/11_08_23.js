/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/99/others/721/
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * Example 1:
 * Input: s = "()"
 * Output: true
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * @param {string} s
 * @return {boolean}
 */

 var isValid = function(s) { 
    if(s.length%2!==0) return false
    
    let stack = []
    const map = new Map()
    map.set("(",")")
    map.set("{","}")
    map.set("[","]")
    
    if(s.length == 2 ) {
       return s[1] == map.get(s[0])
    }
    
    for(let i =0; i< s.length; i++){
        if(map.has(s[i])){
            stack.push(s[i])
        } else {
            if(stack.length == 0) return false 
            
            let last = stack.pop()
            
            if(map.get(last) !== s[i]) return false
        }
        
    }
    
    return stack.length == 0
    
};