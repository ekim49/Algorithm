function solution(array) {
    let strArr = String(array);
    let count = 0;
    for (const number of strArr) {
        number === '7' ? count++ : 0;
    }
    return count;
}