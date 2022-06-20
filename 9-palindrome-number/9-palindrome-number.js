/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x === 0) {
        return true;
    }
    else if (x === Number(x.toString().split('').reverse().join('')) && x > 0) {
        return true;
    } 
    else {
        return false;
    }
};