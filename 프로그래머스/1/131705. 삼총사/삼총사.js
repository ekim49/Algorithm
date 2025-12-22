function solution(number) {
    let answer = 0;

    function dfs(index, count, sum) {
        // base case
        if (count === 3) {
            if (sum === 0) answer++;
            return;
        }
        
        // choose next number
        for (let i = index; i < number.length; i++) {
            dfs(i + 1, count + 1, sum + number[i]);
        }
    }
    
    dfs(0, 0, 0);
    return answer;
}