function solution(quiz) {
    return quiz.map((eqn) => {
        const splitted = eqn.split('=');
        const leftOperand = splitted[0];
        const rightOperand = splitted[1];
        
        return eval(leftOperand) === eval(rightOperand) ? "O" : "X";
    })
}