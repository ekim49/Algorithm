/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const initVal = 0;
    const addWord1 = word1.reduce((acc, cur) => acc + cur, initVal);
    const addWord2 = word2.reduce((acc, cur) => acc + cur, initVal);
    if(addWord1 === addWord2) {
        return true;
    } else {
        return false;
    }
};