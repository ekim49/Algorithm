function solution(n) {
    // 1. n을 2진수로 변환해서 1의 개수를 count
    // 2. 반복문으로 n++ 하면서 2진수로 변환
    // 3. 변환된 2진수의 1개수를 count해서 1번과 같으면 원래 숫자 리턴
    
    // 기존 풀이
//     let n의이진수 = n.toString(2);
//     let n의이진수의1개수 = (n의이진수.match(/1/g) || []).length;
    
//     for (let i = n + 1; i < n * 2; i++) {
//         let binary = i.toString(2);
//         let oneCnt = (binary.match(/1/g) || []).length;
        
//         if (n의이진수의1개수 === oneCnt) return i;
//     }
    
    // 다시 풀이
    let onesInBinary = n.toString(2).match(/1/g).length;
    
    while(n++) {
        if(onesInBinary === n.toString(2).match(/1/g).length) return n;
    }
}
