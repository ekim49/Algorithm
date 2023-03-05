function solution(array) {
    let middle = Math.floor(array.length / 2);
    let sorted = array.sort((a, b) => a - b);
    return sorted[middle];
}