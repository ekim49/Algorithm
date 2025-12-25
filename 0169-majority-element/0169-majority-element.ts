function majorityElement(nums: number[]): number {
    const map = new Map<number, number>();
    const majority = nums.length / 2;

    for (const num of nums) {
        const count = (map.get(num) ?? 0) + 1;
        map.set(num, count);

        if (count > majority) return num;
    }
};