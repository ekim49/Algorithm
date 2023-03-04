function solution(array, n) {
    let count = 0;
    array.forEach(number => number === n ? count++ : null);
    return count;
}