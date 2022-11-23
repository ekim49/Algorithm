/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0;
    
    operations.forEach((el) => {
        if (el === '--X') {
            --X;
        } else if (el === '++X') {
            ++X;
        } else if (el === 'X--') {
            X--;
        } else if (el === 'X++') {
            X++;
        }
    })
    return X;
};