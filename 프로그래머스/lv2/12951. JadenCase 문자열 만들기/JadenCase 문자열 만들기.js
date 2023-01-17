function solution(s) {
    return s.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
}