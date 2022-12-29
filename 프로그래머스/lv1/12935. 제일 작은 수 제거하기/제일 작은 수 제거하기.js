function solution(arr) {
    const minValue = Math.min.apply(null, arr);
    const minIndex = arr.indexOf(minValue);
    
    arr.splice(minIndex, 1);
    
    return arr.length !== 0 ? arr : [-1];
}