function solution(sides) {
    const sorted = sides.sort((a, b) => b - a);
    const longest = sorted[0];
    return longest < sorted[1] + sorted[2] ? 1 : 2;
}