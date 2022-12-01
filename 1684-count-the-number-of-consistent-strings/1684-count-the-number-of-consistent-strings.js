/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    
    for (const word of words) {
        for (const letter of word) {
            if (!allowed.includes(letter)) {
                count++;
                break;
            }
        }
    }
    return words.length - count;
};