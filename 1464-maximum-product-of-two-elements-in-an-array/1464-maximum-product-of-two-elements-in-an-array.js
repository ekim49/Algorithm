/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const sortNums = nums.sort((a, b) => b - a);
    return (sortNums[0]-1) * (sortNums[1]-1);
};