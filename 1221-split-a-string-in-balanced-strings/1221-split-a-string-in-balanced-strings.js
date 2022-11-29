/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let countL = 0;
    let countR = 0;
    let countEqual = 0;
    
    for (const letter of s) {
        if (letter === 'L') {
            countL++;
        } else if (letter === 'R') {
            countR++;
        }
        
        if (countL === countR) {
            countEqual++;
        }
    }
    return countEqual;
};