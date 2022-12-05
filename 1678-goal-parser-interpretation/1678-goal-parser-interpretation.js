/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let str1 = command.replaceAll('()', 'o');
    let str2 = str1.replaceAll('(al)', 'al');
    return str2;
};