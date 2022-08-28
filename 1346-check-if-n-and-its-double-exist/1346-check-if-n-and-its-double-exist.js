/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    // Arr.inlcudes() vs. Set.has()
//     const newArr = new Set();
    
//     for (let i = 0; i < arr.length - 1; i++) {
//         const half = arr[i] / 2;
//         const double = arr[i] * 2;
//         if (newArr.has(half) || newArr.has(double)) {
//             return true;
//             newArr.add(arr[i]);
//         }
//     }
//     return false;
    const newArr = new Set();
    
    for (const num of arr) {
        const half = num / 2 ;
        const double = num * 2;
        if (newArr.has(half) || newArr.has(double)) return true;
        newArr.add(num);
    }
    return false;
};
