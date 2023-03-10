function solution(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        i % 2 === 0 ? null : result.push(i);
    }
    return result;
}