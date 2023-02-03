function solution(my_string) {
    let answer = '';
    for (let letter of my_string) {
        if (letter === letter.toUpperCase()) {
            answer += letter.toLowerCase();
        } else {
            answer += letter.toUpperCase();
        }
    }
    return answer;
}