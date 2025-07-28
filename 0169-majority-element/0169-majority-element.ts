function majorityElement(nums: number[]): number {
    const map = new Map();
    const majority = nums.length / 2;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const count = map.get(num) ?? 0;
        map.set(num, count + 1);

        if (map.get(num) > majority) return num;
    }
};