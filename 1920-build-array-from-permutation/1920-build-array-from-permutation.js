/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr[i] = nums[nums[i]];
    }
    return arr;
};