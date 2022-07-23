/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => b - a);
    const firstProduct = nums[0] * nums[1] * nums[2];
    const secondProduct = nums[nums.length - 1] * nums[nums.length - 2] * nums[0];
    return Math.max(firstProduct, secondProduct);
};