/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    // let maxNum -> first index word count
    // loop over each indices in sentences
    // compare maxNum and word count
    let maxNum = sentences[0].split(' ').length;

    for (let i = 1; i < sentences.length; i++) {
        let numWords = sentences[i].split(' ').length;
        if (numWords > maxNum) {
            maxNum = numWords;
        }
    }
    return maxNum;
};