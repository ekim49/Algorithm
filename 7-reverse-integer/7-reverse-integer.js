/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = Math.pow(2, 31) - 1;
    const min = Math.pow(-2, 31);
    let reverseInt = parseInt(x.toString().split('').reverse().join(''));
    if (x < 0) {
        reverseInt = reverseInt * -1;
    }
    return min <= reverseInt && reverseInt <= max ? reverseInt : 0;
};

