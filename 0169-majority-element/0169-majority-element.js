/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const majority = parseInt(nums.length / 2);
    const sortedNums = nums.sort((a, b) => a - b);
    let count = 1;
    
    for (let i = 0; i < sortedNums.length; i++) {
        if (sortedNums[i] === sortedNums[i + 1]) {
            count++;
        } else {
            count = 1;
        }
        
        if (count > majority) {
            return sortedNums[i];
        }
    }
    return sortedNums[0];
};
