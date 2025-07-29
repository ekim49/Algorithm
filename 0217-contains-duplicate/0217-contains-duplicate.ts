function containsDuplicate(nums: number[]): boolean {
    // 1. 
    // const uniqueNums = new Set(nums);
    // return uniqueNums.size !== nums.length;

    // 2. hash map
    const seen = {};

    for (let num of nums) {
        if (seen[num]) return true;
        seen[num] = true;
    }

    return false;
};