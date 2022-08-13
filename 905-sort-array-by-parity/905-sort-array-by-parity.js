/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    const evenArr = [];
    const oddArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evenArr.push(nums[i]);
        } else {
            oddArr.push(nums[i]);
        }
    }
    return [...evenArr, ...oddArr];
};