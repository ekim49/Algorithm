function countBits(n: number): number[] {
    // initiate ans array with zeros
    const ans = new Array(n + 1).fill(0); // n = 5 -> [0, 0, 0, 0, 0, 0]

    // start with 1 since 0 has no 1's in its binary representation
    for (let i = 1; i <= n; i++) {
        // ans[i] will be the number of 1's in i's binary representation
        // i >> 1 -> right shift by 1 (dropping the least significant bit) e.g. 101 >> 1 -> 010
        // i & 1 -> checking if least significant bit is 1 (whether the number is odd)
        ans[i] = ans[i >> 1] + (i & 1);
    }

    return ans;
};