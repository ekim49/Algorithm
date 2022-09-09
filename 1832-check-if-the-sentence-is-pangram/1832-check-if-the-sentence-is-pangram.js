/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    // new Set 으로 중복 없게 만든다.
    // new Set으로 만든 element의 길이가 26인지 확인
    const uniqueLetters = new Set([...sentence]);
    return uniqueLetters.size === 26 ? true : false;
};