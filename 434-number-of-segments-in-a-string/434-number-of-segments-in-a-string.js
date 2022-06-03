/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    const arr = s.split(' ').filter(el => el);
    return arr.length;
};