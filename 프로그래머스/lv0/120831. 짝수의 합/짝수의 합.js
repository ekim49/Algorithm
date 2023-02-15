function solution(n) {
    let evenNumbers = [];
    for (let i = 2; i <= n; i+=2) {
        evenNumbers.push(i);
    }
    return evenNumbers.reduce((a, b) => a + b, 0);;
}