function longestConsecutive(nums: number[]): number {
    // 1. remove duplicates -> Set
    // 2. for each numbers in nums, check if it is the start of a sequence
    // 3. if it is the start, count sequence length
    // 4. track maximum length

    // edge case
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentLength += 1;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};