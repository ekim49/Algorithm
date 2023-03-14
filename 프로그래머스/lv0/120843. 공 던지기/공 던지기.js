function solution(numbers, k) {
    // 건너뛴 사람의 수 = k - 1 * 2
    // % numbers.length로 배열의 범위 밖을 벗어났을 때 범위 안으로 다시 계산하게 한다.
    return numbers[(k - 1) * 2 % numbers.length];
}
