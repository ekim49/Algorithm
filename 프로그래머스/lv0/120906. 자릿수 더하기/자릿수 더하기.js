function solution(n) {
    const splitToString = [...n.toString()];
    const splitNumbers = splitToString.map((str) => Number(str));
    return splitNumbers.reduce((a, b) => a + b, 0);
}