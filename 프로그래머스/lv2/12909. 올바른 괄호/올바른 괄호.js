function solution(s){
    let 누적 = 0;
    for (let 괄호 of s) {
        누적 += 괄호 === '('? 1: -1; // 괄호가 ')' 인 경우 누적 = -1이 되어 아래 if문에서 걸림
        
        if(누적 < 0) return false;
    }
    return 누적 === 0;
}
