/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const arr1 = s1.split(' ');
    const arr2 = s2.split(' ');
    const newArr = arr1.concat(arr2);

    let result = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr.indexOf(newArr[i]) !== newArr.lastIndexOf(newArr[i])) {
            continue;
        }
        result.push(newArr[i]);
    }
    return result;
}