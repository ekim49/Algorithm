function solution(numbers, direction) {
    // if (direction === 'right') {
    //     let 이동할숫자 = numbers.pop();
    //     numbers.unshift(이동할숫자);
    // } else {
    //     let 이동할숫자 = numbers.shift();
    //     numbers.push(이동할숫자);
    // }
    // return numbers;
    direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
    return numbers;
}