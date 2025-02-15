function maxArea(height: number[]): number {
    // two pointers
    // time complexity O(n), space complexity O(1)
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const width = right - left;
        const containerHeight = Math.min(height[left], height[right]);
        const area = width * containerHeight;
        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) left++;
        else right--;
    }

    return maxWater;
};