/**
 * @param {number[]} nums
 * @return {number}
 */                         
var sumOfUnique = function(nums) {
    
    const arr = []
    
    for (let i =0; i<nums.length; i++){
        if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
            arr.push(nums[i]);
        }
    }    
    return arr.reduce((a, b) => a + b, 0);
};