/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length + 1;
    const arr = Array.from(Array(n).keys());
    
    // for (const el of nums) { // [4,3,2,7,8,2,3,1]
    //     arr.include(el) ? continue : el;// [0, 1, 2, 3, 4, 5, 6, 7, 8]
    // }
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (nums.includes(arr[i])) {
            continue;
        } else {
            result.push(arr[i]);
        }
    }
    result.shift();
    return result;
};