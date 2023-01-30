function solution(num, total) {
    // result의 중간 값 = total / num
    const initialNum = Math.ceil(total / num - Math.floor(num / 2));
    return Array.from({length: num}, (item, idx) => idx + initialNum);
}