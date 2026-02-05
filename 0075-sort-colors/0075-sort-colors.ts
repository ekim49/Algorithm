/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    // three pointers -> time O(n), space O(1)
    let left = 0;
    let mid = 0;
    let right = nums.length - 1;

    const swap = (i, j) => {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    while (mid <= right) {
        if (nums[mid] === 0) {
            swap(left, mid);
            left++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            swap(mid, right);
            right--;
        }
    }
};