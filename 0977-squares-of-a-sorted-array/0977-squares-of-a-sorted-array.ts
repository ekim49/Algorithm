function sortedSquares(nums: number[]): number[] {
    // // brute force -> time O(n log n), space O(n)
    // return nums.map(num => num * num).sort((a, b) => a - b);

    // two pointers -> time O(n), space O(n)
    const n = nums.length;
    const result = new Array(n);

    let left = 0;
    let right = n - 1;
    let pos = n - 1;

    // continue until pointers meet
    while (left <= right) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];

        // place larger number at current position
        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            left++; // move left inward
        } else {
            result[pos] = rightSquare;
            right--; // move right inward
        }
        pos--; // move to next position (moving leftward)
    }

    return result;
};