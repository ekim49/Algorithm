function reverseBits(n: number): number {
    // unsigned integer (no negative values are allowed)
    // -> force the result to be unsiged by using result >>> 0

    // 1. extract the last bit of n (n & 1)
    // 2. left shift by 1 to make space
    // 3. OR the result with the extracted bit from step 1 to append it
    // 4. right shift n (unsigned) to removed the used bit

    let result = 0;

    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>>= 1;
    }

    return result >>> 0; // force the result to be unsigned
};