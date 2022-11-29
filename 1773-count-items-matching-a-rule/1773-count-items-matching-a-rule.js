/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for (const item of items) {
        if (ruleKey === 'type' && item[0] === ruleValue) {
            count++;
        } else if (ruleKey === 'color' && item[1] === ruleValue) {
            count++
        } else if (ruleKey === 'name' && item[2] === ruleValue) {
            count++
        }
    }
    return count;
};