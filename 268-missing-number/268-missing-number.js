/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
        let num = nums.indexOf(i);
        if (num === -1) return i;
    }
};