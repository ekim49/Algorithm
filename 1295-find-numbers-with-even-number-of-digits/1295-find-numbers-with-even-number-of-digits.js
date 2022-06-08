/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const newNums = nums.map(num => String(num));
    const evenLength = [];
    for (let i = 0; i < newNums.length; i++){
        if (newNums[i].length % 2 === 0) {
            evenLength.push(newNums[i]);
        }
    }
    return evenLength.length;
};