/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // Math.log2(n) = y => 2**y = n
    // Number.isInteger() -> true/ false
    return Number.isInteger(Math.log2(n));
}