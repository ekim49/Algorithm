/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let sums = [];
    for (const customer of accounts) {
        let sum = customer.reduce((a, b) => a + b, 0);
        sums.push(sum);
    }
    return Math.max(...sums)
};