function solution(n) {
    let 약수의합 = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) 약수의합 += i;
    }
    return 약수의합;
}