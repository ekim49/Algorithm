function containsDuplicate(nums: number[]): boolean {
    const seen = {};

    for (let num of nums) {
        if (seen[num]) return true;
        seen[num] = true;
    }

    return false;
};