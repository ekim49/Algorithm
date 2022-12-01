/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let pairs = [];

    for (let i of nums) {
        for (let j of nums) {
            if (i < j && Math.abs(i - j) === k) {
                pairs.push([i, j])
            }
        }
    }
    return pairs.length;
};