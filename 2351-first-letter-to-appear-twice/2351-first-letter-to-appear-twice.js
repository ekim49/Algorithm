/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let arr = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "") {
            if (arr.indexOf(s[i]) !== -1) {
                return s[i];
            } else {
                arr.push(s[i]);
            }
        }
    }
    return null;
};

