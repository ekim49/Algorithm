function solution(numbers) {
    const numberStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for (let i = 0; i < numberStr.length; i++) {
        numbers = numbers.split(numberStr[i]).join(i);
    }
    return Number(numbers);
}