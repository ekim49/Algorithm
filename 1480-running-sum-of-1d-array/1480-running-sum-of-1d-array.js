/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // nums[0] = nums[0]
    // nums[1] = nums[0] + nums[1]
    // nums[2] = nums[0] + nums[1] + nums[2]
    for (let i = 1; i < nums.length; i++){
        nums[i] += nums[i - 1]
    }
    return nums;
};