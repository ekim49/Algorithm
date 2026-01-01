function productExceptSelf(nums: number[]): number[] {
    // const n = nums.length;
    // const left = Array(n).fill(1);
    // const right = Array(n).fill(1);
    // const result = Array(n);

    // // from left
    // for (let i = 1; i < n; i++) {
    //     left[i] = left[i - 1] * nums[i - 1];
    // }

    // // from right
    // for (let i = n - 2; i >= 0; i--) {
    //     right[i] = right[i + 1] * nums[i + 1];
    // }

    // // left * right
    // for (let i = 0; i < n; i++) {
    //     result[i] = left[i] * right[i];
    // }

    // return result;

    // Prefix & Suffix O(n)
    const n = nums.length;

    // products of everything before i
    const prefix = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // products of everything after i
    const suffix = new Array(n).fill(1);
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = prefix[i] * suffix[i];
    }

    return result;
};