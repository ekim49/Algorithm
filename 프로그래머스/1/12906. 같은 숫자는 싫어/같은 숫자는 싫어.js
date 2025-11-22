function solution(arr) {
    const result = [];
    let prev = null;
    
    for (const num of arr) {
        if (num !== prev) {
            result.push(num);
            prev = num;
        }
    }
    
    return result;
}