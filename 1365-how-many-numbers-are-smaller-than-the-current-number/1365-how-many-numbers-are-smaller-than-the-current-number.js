/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sortNums = nums.slice().sort((a, b) => a - b); // copy nums and sort
    const result = [];
    
    for(let i = 0; i < sortNums.length; i++) {
        result.push(sortNums.indexOf(nums[i])); // indices of sortNums will indicate the count of nums smaller than current number
    }
    return result;
};

