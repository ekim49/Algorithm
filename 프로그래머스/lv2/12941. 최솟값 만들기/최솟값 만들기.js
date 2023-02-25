function solution(A,B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    // reduce 함수의 세 번째 인자 index를 활용해서 풀이
    return A.reduce((total, val, idx) => total + val * B[idx], 0)
}