function solution(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) unique.push(arr[i]);
    }
    return unique;
}