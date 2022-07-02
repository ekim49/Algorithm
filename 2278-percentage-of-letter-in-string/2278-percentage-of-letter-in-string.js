/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count = s.split(letter).length - 1;
    let percentage = count / s.length * 100;
    return Math.floor(percentage);
};

