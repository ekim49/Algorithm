/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    // 한 자리수면 true
    // 끝자리가 0이면 false
    // const reverseNum = Number(num.toString().split('').reverse().join(''));
    if (0 <= num && num < 10) return true;
    return Number.isInteger(num / 10) === false ? true : false;

};