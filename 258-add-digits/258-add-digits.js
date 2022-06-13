/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
    while (num.toString().length !== 1) {
        let numArr = num.toString().split("");
        let sum = 0;
        for (const i of numArr) {
            sum += Number(i);
        }
        num = sum;
    }
    return num;
};