function majorityElement(nums: number[]): number {
    // 1. Hash Map (Time O(n), Space O(n))
    // const map = new Map<number, number>();
    // const majority = nums.length / 2;

    // for (const num of nums) {
    //     const count = (map.get(num) ?? 0) + 1;
    //     map.set(num, count);

    //     if (count > majority) return num;
    // }

    // 2. Boyer-Moore (Time O(n), Space O(1))
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        } 
        else if (num === candidate) count++;
        else count--;
    }

    return candidate;
};