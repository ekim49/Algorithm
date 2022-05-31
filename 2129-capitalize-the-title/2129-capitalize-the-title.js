/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    // title.split(' ')
    // for loop split[i][0].toUpperCase
    // + split[i].slice(1).toLowerCase
    // join
    let fixedWord = title.split(' ').map(word => {
         if (word.length > 2) {
            word = word[0].toUpperCase() + word.slice(1).toLowerCase();
         } else {
            word = word.toLowerCase();
         }
         return word;
    })
    return fixedWord.join(' ');
};
    // for (let i = 0; i < split.length; i++) {
    //     if(split[i].length <= 2) {
    //         return split[i].toLowerCase();
    //     } else if (split[i].length > 2) {
    //         return split[i] = split[i][0].toUpperCase() + split[i].slice(1).toLowerCase();
    //     }
    // }
    // return split.join(' ');
