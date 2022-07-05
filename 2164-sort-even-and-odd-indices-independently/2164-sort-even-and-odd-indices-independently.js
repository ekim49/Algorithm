/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let even = [];
    let odd = [];
    let result = [];
    
    for (let i = 0; i < nums.length; i++) {
        i % 2 === 0 ? even.push(nums[i]) : odd.push(nums[i]);
    }
    
    even.sort((a, b) => a - b);
    odd.sort((a, b) => b - a);
    
    for (let i = 0; i < nums.length/2; i++) {
        if(even[i]) result.push(even[i]);
        if(odd[i]) result.push(odd[i]);
    }
    
    return result;
};

