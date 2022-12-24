function solution(numbers) {
    let result = [];
    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) {
            result.push(i);
        }
    }
    return result.reduce((a, b) => a + b, 0);
}