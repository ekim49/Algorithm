/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let arr = [];

    for (let i = 0; i < s.length; i += k) {
        arr.push(s.substring(i, i + k));
        
        while (arr[arr.length - 1].length < k) {
            arr[arr.length - 1] = arr[arr.length - 1] + fill;
        }
        
    }
    return arr;
};