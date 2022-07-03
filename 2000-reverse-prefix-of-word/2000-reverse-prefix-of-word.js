/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let result = "";
    
    const index = word.indexOf(ch);
    const reverse = word.slice(0, index + 1);
    const doNothing = word.slice(index + 1, word.length);
    
    for (let i = index; i >= 0; i--) {
        result += reverse[i];
    }
    return result + doNothing;
};
