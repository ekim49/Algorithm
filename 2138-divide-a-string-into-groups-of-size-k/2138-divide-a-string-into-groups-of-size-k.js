/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    // k 자리로 각각 나눠서
    // 나누어떨어지면 그대로
    // 모자라면 fill 로 채운다
    let arr = [];

    for (let i = 0; i < s.length; i += k) {
        arr.push(s.substring(i, i + k));
        
        while (arr[arr.length - 1].length < k) {
            arr[arr.length - 1] = arr[arr.length - 1] + fill;
        }
        
    }
    return [...arr];
};