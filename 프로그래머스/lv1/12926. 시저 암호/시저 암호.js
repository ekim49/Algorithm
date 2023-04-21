function solution(s, n) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    
    const isLowercaseLetter = (char) => /^[a-z]$/.test(char);
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            continue;
        }
        else if (isLowercaseLetter(s[i])) {
            let idx = alphabet.indexOf(s[i]);
            idx += n;
            idx %= 26
            answer += alphabet[idx];
        } else {
            let idx = alphabet.indexOf(s[i].toLowerCase());
            idx += n;
            idx %= 26
            answer += alphabet[idx].toUpperCase();
        }
    }
    
    return answer;
}