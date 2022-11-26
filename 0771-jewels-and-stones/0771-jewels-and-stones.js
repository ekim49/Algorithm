/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    
    for (let item of stones) {
        if (jewels.includes(item)) {
            count++;
        }
    }
    return count;
};
