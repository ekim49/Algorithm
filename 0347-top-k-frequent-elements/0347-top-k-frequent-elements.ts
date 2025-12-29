function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(([num]) => num);
};