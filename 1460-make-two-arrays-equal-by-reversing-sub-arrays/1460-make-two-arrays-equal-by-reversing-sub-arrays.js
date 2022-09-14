/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const sortTarget = target.sort((a, b) => a - b);
    const sortArr = arr.sort((a, b) => a - b);
    
    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i]) {
            return false;
        }
    }
    return true;
};