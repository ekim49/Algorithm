/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const newArr = s.split(' ');
    const filtered = newArr.filter(el => el !== '');
    return filtered[filtered.length - 1].length;
};