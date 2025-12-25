function majorityElement(nums: number[]): number {
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const majorityOccurcence = nums.length / 2;

    for (let [k, v] of map) {
        if (v >= majorityOccurcence) return k;
    }
};