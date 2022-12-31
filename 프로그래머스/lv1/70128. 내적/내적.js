function solution(a, b) {
    let result = 0;
    let len = a.length;
    for (let i = 0; i < len; i++) {
        let mul = a[i] * b[i]; 
        result += mul;
    }
    return result;
}