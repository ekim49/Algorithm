function solution(arr, divisor) {
    const dividable = arr.filter(number => !(number % divisor)).sort((a, b) => a - b);
    return dividable.length ? dividable : [-1];
}