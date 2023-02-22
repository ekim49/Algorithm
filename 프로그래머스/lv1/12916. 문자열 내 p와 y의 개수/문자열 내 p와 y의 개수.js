function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    let letters = s.toLowerCase();
    
    for (const letter of letters) {
        if(letter === 'p') pCnt++;
        if(letter === 'y') yCnt++;
    }
    return pCnt === yCnt;
}