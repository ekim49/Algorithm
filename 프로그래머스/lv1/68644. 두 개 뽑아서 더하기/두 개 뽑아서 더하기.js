function solution(numbers) {
    let sums = [];
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (i !== j) sums.push(numbers[i] + numbers[j]);
        }
    }
    const result = [...new Set(sums)].sort((a, b) => a - b);
    return result;
}
