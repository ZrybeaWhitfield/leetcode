/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/
 * Single Number
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * Example 1:
 * Input: nums = [2,2,1]
 * Output: 1
 * Example 2:
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 * Example 3:
 * Input: nums = [1]
 * Output: 1
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
           map.set(nums[i], 2)
        } else {
            map.set(nums[i], 1)
        }
    }
    
    for(const [key, value] of map) {
        if(value == 1){
           return key
           }
    }
    
};

//Another solution is to sort the array and compare adjecent elements, returning first element where there's no match