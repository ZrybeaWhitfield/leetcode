/**
 * https://leetcode.com/problems/fizz-buzz/description/
 * 412. Fizz Buzz
 * Given an integer n, return a string array answer (1-indexed) where:
 * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 * answer[i] == "Fizz" if i is divisible by 3.
 * answer[i] == "Buzz" if i is divisible by 5.
 * answer[i] == i (as a string) if none of the above conditions are true.
 * Example 1:
 * Input: n = 3
 * Output: ["1","2","Fizz"]
 * @param {number} n
 * @return {string[]}
 */

 var fizzBuzz = function(n) {
    let answer = [];

    for(let i = 1; i <= n; i++){
        if(i %15 == 0 ){
            answer.push("FizzBuzz")
        }else if (i%3==0){
            answer.push("Fizz")
        }else if (i%5==0){
            answer.push("Buzz")
        }else{
            answer.push(i.toString())
        } 
    }
    return answer

};

/**
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/
 * 1342. Number of Steps to Reduce a Number to Zero
 * Given an integer num, return the number of steps to reduce it to zero.
 * In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 * Example 1:
 * Input: num = 14
 * Output: 6
 * Explanation: 
 * Step 1) 14 is even; divide by 2 and obtain 7. 
 * Step 2) 7 is odd; subtract 1 and obtain 6.
 * Step 3) 6 is even; divide by 2 and obtain 3. 
 * Step 4) 3 is odd; subtract 1 and obtain 2. 
 * Step 5) 2 is even; divide by 2 and obtain 1. 
 * Step 6) 1 is odd; subtract 1 and obtain 0.
 * @param {number} num
 * @return {number}
 */

 var numberOfSteps = function(num) {
    let stepCounter = 0;
    while(num > 0){
        if(num % 2 == 0){
            num /= 2
        }else {
            num -= 1
        }
        stepCounter++
    }
    return stepCounter
    
};