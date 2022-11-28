/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let targetArr = [];
    
    nums.forEach((el, i) => {
        targetArr.splice(index[i], 0, el);
    });
    return targetArr;
};