function maxSubArray(nums: number[]): number {
    let tempSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        tempSum = Math.max(nums[i], tempSum + nums[i]);
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
};