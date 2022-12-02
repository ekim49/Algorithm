/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
//     if (!strs.length) {
//         return '';
//     }
    
//     for (let i = 0; i < strs[0].length; i++) {
//         for (let str of strs) { // "flower"
//             if (str[i] !== strs[0][i]) {
//                 return str.slice(0, i);
//             }
//         }
//     }
//     return strs[0];
    if (!strs.length) {
        return '';
    }
    
    let result = '';
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return result;
            }
        }
        result = result + strs[0][i];
    }
    return result;
};