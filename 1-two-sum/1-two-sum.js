/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        rest = nums.slice(i + 1)
        if (rest.includes(target - nums[i])) {
            return [i, i + 1 + rest.indexOf(target - nums[i])]
        }
    }
};
