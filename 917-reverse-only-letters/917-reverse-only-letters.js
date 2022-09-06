/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const arr = s.split(''); // ['a', '-', 'b', 'C', '-', 'd', 'E', 'f', '-', 'g', 'h', 'I', 'j']
    const letters = s.match(/[a-zA-Z]/g); // ['a', 'b', 'C', 'd', 'E', 'f', 'g', 'h', 'I', 'j']
    
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(/[a-zA-Z]/i)) {
            result.push(letters.pop());
        } else {
            result.push(arr[i]);
        }
    }
   return result.join('');
};