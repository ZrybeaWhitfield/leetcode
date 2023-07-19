/**
 * https://leetcode.com/problems/running-sum-of-1d-array/description/
 * 1480. Running Sum of 1d Array
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]
 * @param {number[]} nums
 * @return {number[]}
 **/

 var runningSum = function(nums) {
    let sumArr = [];
    let runningSum = 0;

    nums.forEach(num => {
        runningSum = num + runningSum

        sumArr.push(runningSum)

    })

    return sumArr;
};

/**
 * https://leetcode.com/problems/richest-customer-wealth/description/
 * 1672. Richest Customer Wealth
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 * Example 1:
 * Input: accounts = [[1,2,3],[3,2,1]]
 * Output: 6
 * Explanation:
 * 1st customer has wealth = 1 + 2 + 3 = 6
 * 2nd customer has wealth = 3 + 2 + 1 = 6
 * Both customers are considered the richest with a wealth of 6 each, so return 6
 * @param {number[][]} accounts
 * @return {number}
 **/

 var maximumWealth = function(accounts) {
    let biggestWealth = 0;
    for (let customer of accounts){
        let currentWealth = 0;
        customer.forEach(value => {
            currentWealth += value
        })

        biggestWealth = Math.max(currentWealth, biggestWealth)
    }

    return biggestWealth;
};