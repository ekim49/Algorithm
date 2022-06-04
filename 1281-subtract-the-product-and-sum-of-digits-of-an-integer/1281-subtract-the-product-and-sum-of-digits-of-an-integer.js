/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const numbers = n.toString().split('').map(Number);
    const sum = numbers.reduce((a, b) => a + b);
    const multiply = numbers.reduce((a, b) => a * b);
    return multiply - sum;
};
