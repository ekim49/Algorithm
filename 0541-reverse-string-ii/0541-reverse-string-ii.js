/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const sArr = s.split('');
    
    if (k > s.length) {
        return s.split('').reverse().join('');
    }

    for (let i = 0; i < s.length; i += 2 * k) {
        const reverseArr = sArr.splice(i, k).reverse();
        sArr.splice(i, 0, ...reverseArr);
    }
    
    return sArr.join('');
}