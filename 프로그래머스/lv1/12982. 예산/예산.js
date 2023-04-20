function solution(d, budget) {
    let result = 0;
    let acc = 0;
    const dSorted = d.sort((a, b) => a - b); 
    
    for (let i = 0; i < dSorted.length; i++) {
        if (acc + dSorted[i] <= budget) { 
            acc += dSorted[i]; 
            result++; 
        } else break;
    }
    return result;
}