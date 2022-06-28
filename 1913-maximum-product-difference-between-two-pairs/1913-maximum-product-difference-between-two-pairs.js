/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a, b) => b - a);
    for (let i = 0; i < nums.length; i++) {
        maxProduct = nums[0] * nums[1];
        minProduct = nums[nums.length - 2] * nums[nums.length - 1];
        return maxProduct - minProduct;
    }
};