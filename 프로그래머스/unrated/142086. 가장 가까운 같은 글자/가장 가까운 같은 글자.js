function solution(s) {
    let arr = [];
    let result = [];
    
    for (let i = 0; i < s.length; i++) {
        // arr.includes(s[i]) ? result.push(i - arr.lastIndexOf(s[i])) : -1;
        if (arr.includes(s[i])) {
            result.push(i - arr.lastIndexOf(s[i]));
        } else {
            result.push(-1)
        }
        arr.push(s[i]);
    }
    return result;
}