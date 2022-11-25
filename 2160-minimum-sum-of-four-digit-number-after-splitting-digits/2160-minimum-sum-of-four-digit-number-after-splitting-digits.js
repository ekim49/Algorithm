/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const numArr = num.toString().split('');
    numArr.sort((a, b) => a - b);
    
    return Number(numArr[0] + numArr[3]) + Number(numArr[1] + numArr[2]);
};