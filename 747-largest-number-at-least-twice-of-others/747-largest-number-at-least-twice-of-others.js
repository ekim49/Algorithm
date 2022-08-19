/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    // 내림차순으로 정렬
    // if 두번째로 큰 값의 두배 > 가장 큰 값 보다 크다면 -1 리턴
    // else 1
    const newNums = nums.slice();
    const sortNums = newNums.sort((a, b) => b - a);
    const maxNum = sortNums[0];
    
    return (sortNums[1] * 2) <= maxNum ? nums.indexOf(maxNum) : -1;
};