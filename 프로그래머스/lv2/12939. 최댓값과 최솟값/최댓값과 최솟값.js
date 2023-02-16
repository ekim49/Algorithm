function solution(s) {
    const numbers = s.split(' ').map((el) => Number(el)).sort((a, b) => a - b);
    const smallest = numbers[0];
    const largest = numbers[numbers.length - 1];
    return `${smallest} ${largest}`;
}