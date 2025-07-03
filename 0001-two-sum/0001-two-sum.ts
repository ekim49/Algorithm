function twoSum(nums: number[], target: number): number[] {
    // for (let i = 0; i < nums.length; i++) {
    //     const numToFind = target - nums[i]
    //     const j = nums.indexOf(numToFind);
    //     if (j !== -1 && i !== j) return [i, j];
    // }

    // hash map - O(n)
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) return [map.get(complement), i];

        map.set(nums[i], i);
    }
};