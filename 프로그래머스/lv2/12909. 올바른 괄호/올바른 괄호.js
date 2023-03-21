function solution(s) {
    const [open, close] = ['(', ')'];
    let [openCnt, closeCnt] = [0, 0];
    
    if (s.length % 2 !== 0) return false; 
    if (s[0] !== open || s[s.length - 1] !== close) return false; 
  
    for (let i = 0; i < s.length; i++) {
        if (s[i] === open) {
          openCnt++;
        } else if (s[i] === close) {
          closeCnt++;
        } else {
          return false;
        }
        
        if (closeCnt > openCnt) {
          return false; 
        }
    }
  return openCnt === closeCnt;
}
