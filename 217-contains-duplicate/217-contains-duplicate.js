/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const setCollection = new Set(nums);
    const isDuplicate = setCollection.size < nums.length;
    return isDuplicate;
};
        