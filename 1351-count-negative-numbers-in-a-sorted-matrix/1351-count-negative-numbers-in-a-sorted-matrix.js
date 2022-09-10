/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    // 1차원 배열로 풀어서
    // negative number 탐색
    const arr = grid.reduce((acc, val) => [...acc, ...val], []);
    let count = 0;
    arr.forEach((el) => el < 0 ? count++ : 0);
    return count;
};