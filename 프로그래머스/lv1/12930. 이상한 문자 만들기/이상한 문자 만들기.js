function solution(s) {
    const arr = s.split(' ');
    return arr.map(word => word.split('').map((letter, idx) => idx % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')).join(' ');
}