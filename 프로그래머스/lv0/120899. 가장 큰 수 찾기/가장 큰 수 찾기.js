function solution(array) {
    let largest = array[0];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= largest) {
            largest = array[i];
            index = i;
        }
    }
    return [largest, index];
}