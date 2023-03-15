function solution(before, after) {
    const beforeSorted = before.split('').sort().join('');
    const afterSorted = after.split('').sort().join('');

    return beforeSorted === afterSorted ? 1 : 0;
}