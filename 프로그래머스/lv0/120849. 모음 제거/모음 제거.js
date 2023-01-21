function solution(my_string) {
    const vowelRegex = /[aeiou]+/g;
    return my_string.replace(vowelRegex, '');
}