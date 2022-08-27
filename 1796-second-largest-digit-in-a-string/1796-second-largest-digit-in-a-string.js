/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            arr.push(s[i]);
        }
    }
    
    const sortedNums = arr.sort((a, b) => b - a);
    const uniqueSortedNums = [...new Set(sortedNums)];
    for (let i = 0; i < uniqueSortedNums.length; i++) {
        if (uniqueSortedNums[i] !== uniqueSortedNums[uniqueSortedNums.length - 1]) {
            return parseInt(uniqueSortedNums[1]);
        }
    }
    return -1;
};
