/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const number = nums.length;
    const arr = Array.from(Array(number + 1).keys()); 
    
    for (let i = 0; i < arr.length; i++) {
        if (nums.includes(arr[i])) {
            continue;
        } else {
            return arr[i];
        }
    }
};