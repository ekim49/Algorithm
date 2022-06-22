/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    // includes()
    // toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const a = s.slice(0, s.length/2).split(''); // ['t', 'e', 'x', 't']
    const b = s.slice(s.length/2, s.length).split(''); // ['b', 'o', 'o', 'k']
    let aCount = 0;
    let bCount = 0;
    for (var i = 0; i < a.length; i++) {
        if (vowels.includes(a[i])) {
         aCount += 1;
        }
    }

    for (var i = 0; i < b.length; i++) {
        if (vowels.includes(b[i])) {
          bCount += 1;
        }
    }
    
    return aCount === bCount ? true : false;
};


