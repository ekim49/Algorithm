/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    const copiedNums = nums.slice();
    return nums.concat(copiedNums);
};