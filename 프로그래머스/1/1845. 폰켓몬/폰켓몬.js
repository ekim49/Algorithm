function solution(nums) {
    const maxPick = nums.length / 2;
    const uniq = new Set(nums).size;
    return Math.min(maxPick, uniq);
}