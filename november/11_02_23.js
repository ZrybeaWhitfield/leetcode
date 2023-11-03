/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * Example 1:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Example 2:
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var rotate = function(nums, k) {
    if(k > nums.length) {
        k = k%nums.length
       }
    let end = nums.splice(nums.length -k)
    nums.unshift(...end)
};