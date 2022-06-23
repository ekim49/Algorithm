/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) {
        const reverse = words[i].split('').reverse().join('');
        if (words[i] === reverse) {
            return words[i];
        } 
    }
    return '';
};