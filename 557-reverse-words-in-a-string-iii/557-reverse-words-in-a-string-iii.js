/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(' ');
    let reverseArr = sArr.map(el => {
        return el.split('').reverse().join('');
    });
    return reverseArr.join(' ');
};
