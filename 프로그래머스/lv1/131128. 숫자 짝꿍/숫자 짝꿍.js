function solution(X, Y) {
    let answer = '';
    const number = Array.from(Array(10).fill(0));
    const common = [];

    for(let i = 0; i < X.length; i++) {
        number[X[i]] += 1
    }

    for(let j = 0; j < Y.length; j++) {
        if(number[Y[j]] > 0) {
            common.push(Y[j])
            number[Y[j]] -= 1
        }
    }

    answer = common.length > 0 ? common.sort((a, b) => b - a).join("") : '-1'
    if(answer === '') {
        answer = "-1"
    } else if( Number(answer) === 0) {
        answer = "0"
    }

    return answer;
}