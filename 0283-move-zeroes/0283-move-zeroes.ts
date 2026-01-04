/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    // O(n)
    // two pointers 
    // - read -> index
    // - write -> leftPos (mark where the next non-zero should go)
    let leftPos = 0;
    for (let i = 0; i < nums.length; i++) {
        // if the number is non-zero, swap and move leftPos to right
        if (nums[i] !== 0) {
            [nums[leftPos], nums[i]] = [nums[i], nums[leftPos]];
            leftPos++;
        }
        // if the number is zero, skip
    }
};