function solution(x) {
    let 자릿수합 = x.toString().split('').map(el => Number(el)).reduce((a, b) => a + b, 0);
    return x % 자릿수합 === 0;
}