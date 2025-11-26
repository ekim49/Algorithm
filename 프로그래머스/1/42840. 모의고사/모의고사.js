function solution(answers) {
    const student1 = [1, 2, 3, 4, 5];
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const scores = Array(3).fill(0);
    
    answers.forEach((answer, idx) => {
        if (answer === student1[idx % student1.length]) scores[0]++;
        if (answer === student2[idx % student2.length]) scores[1]++;
        if (answer === student3[idx % student3.length]) scores[2]++;
    });
    
    const maxScore = Math.max(...scores);
    const result = [];
    scores.forEach((score, idx) => {
        if (score === maxScore) result.push(idx + 1);
    });
    
    return result;
}