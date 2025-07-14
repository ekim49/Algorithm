function maxProduct(nums: number[]): number {
    let curMin = nums[0];
    let curMax = nums[0];
    let maxVal = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        if (num < 0) {
            [curMax, curMin] = [curMin, curMax];
        }

        curMax = Math.max(num, curMax * num);
        curMin = Math.min(num, curMin * num);

        maxVal = Math.max(maxVal, curMax);
    }
    return maxVal;
};