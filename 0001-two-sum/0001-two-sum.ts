function twoSum(nums: number[], target: number): number[] {
    // hash map O(1)
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) return [map.get(diff), i];
        map.set(nums[i], i);
    }
};