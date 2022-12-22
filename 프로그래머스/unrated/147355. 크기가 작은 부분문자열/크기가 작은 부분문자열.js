function solution(t, p) {
    // substring(i, length + 1)
    let substr = [];
    let len = p.length;
    let pNum = Number(p);
    let count = 0;
    
    for (let i = 0; i < t.length; i++) {
        let nums = t.substring(i, i + len);
        if (nums.length === len) {
            substr.push(Number(nums));
        }
    }
    
    for (let number of substr) {
        if (number <= pNum) {
            count++;
        }
    }
    return count;
}