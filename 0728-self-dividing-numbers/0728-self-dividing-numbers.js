/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];
    
    for (let i = left; i <= right; i++) {
        let numArr = i.toString().split('');
        if (numArr.every((num) => i % Number(num) === 0)) {
            result.push(i);
        }
    }
    return result;
};
