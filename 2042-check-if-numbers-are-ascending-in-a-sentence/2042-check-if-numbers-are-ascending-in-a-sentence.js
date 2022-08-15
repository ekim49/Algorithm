/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const arr = s.split(' ');
    const validNumbers = arr.filter(Number);
    const toNumbers = validNumbers.map(Number);
    // const sortedNumbers = toNumbers.sort((a, b) => a - b);
    
    for (let i = 0; i < toNumbers.length - 1; i++) {
        if (toNumbers[i] < toNumbers[i + 1]) {
            toNumbers[i] = toNumbers[i + 1];
        } else {
            return false;
        }
    }
    return true;
};
