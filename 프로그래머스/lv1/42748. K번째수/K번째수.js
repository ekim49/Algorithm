function solution(array, commands) {
    let result = [];
    
    for (let command of commands) {
        let startIdx = command[0] - 1; 
        let endIdx = command[1]; 
        let targetIdx = command[2] - 1;
        
        const cutArray = array.slice(startIdx, endIdx).sort((a, b) => a - b);
        result.push(cutArray[targetIdx]);
    }
    return result;
}