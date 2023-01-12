function solution(s) {
    const regex = /^-?\d+$/;
    if (s.length === 4 || s.length === 6) return regex.test(s);
    return false;
}