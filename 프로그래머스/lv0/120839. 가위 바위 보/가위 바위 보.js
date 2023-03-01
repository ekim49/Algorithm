function solution(rsp) {
    let [scissors, rock, paper] = ['2', '0', '5'];
    let winning = [];
    
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === scissors) winning += rock;
        if (rsp[i] === rock) winning += paper;
        if (rsp[i] === paper) winning += scissors;
    }
    return winning;
}