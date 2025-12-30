function topKFrequent(nums: number[], k: number): number[] {
    // // time O(n log n)
    // const map = new Map<number, number>();

    // for (let num of nums) {
    //     map.set(num, (map.get(num) || 0) + 1);
    // }

    // const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
    // return sorted.slice(0, k).map(([num]) => num);

    // Bucket sort O(n)
    const frequencyMap = new Map();

    // 1. count frequencies
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // 2. create buckets
    const buckets = Array(nums.length + 1).fill(null).map(() => []);

    for (const [num, freq] of frequencyMap) {
        buckets[freq].push(num);
    }

    // 3. collect top k
    const result = [];
    for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
        result.push(...buckets[freq]);
    }

    return result.slice(0, k);
};