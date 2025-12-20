function solution(brown, yellow) {
    // find all posibilities for yellow rectangle dimensions
    // constraint: width >= height
    for (let h = 1; h <= Math.sqrt(yellow); h++) {
        if (yellow % h !== 0) continue;
        const w = yellow / h;
        
        const totalW = w + 2;
        const totalH = h + 2;
        
        const brownCount = (totalW * totalH) - yellow;
        
        if (brown === brownCount) return [totalW, totalH];
    }
}