function solution(n) {
    let reversedN = n.toString().split('').reverse();
    return reversedN.map(el => Number(el));
}