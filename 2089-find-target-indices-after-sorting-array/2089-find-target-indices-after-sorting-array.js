/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const sortedArr = nums.sort((a, b) => a - b);
    const idx = [];
    for (let i = 0; i < sortedArr.length; i++){
        if (sortedArr[i] === target) {
            idx.push(i);
        }
    }
    // return sortedArr[target];
    return idx;
};
