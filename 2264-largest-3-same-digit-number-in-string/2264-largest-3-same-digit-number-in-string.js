/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    // num 을 순회하면서 세자리 반복되는 숫자는 새 배열에 push한다
    // 세자리 반복되는 숫자가 없다면 "" 리턴
    const sameDigits = [];
    const numArr = num.split('');
    
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === numArr[i + 1] && numArr[i + 1] === numArr[i + 2]) {
            sameDigits.push(numArr.slice(i, i + 3).join(""));
        }
    }
    return sameDigits.length !== 0 ? sameDigits.sort((a, b) => b - a)[0] : "";
};
