function spiralOrder(matrix: number[][]): number[] {
    // time O(m * n) space O(1)
    // edge case
    if (!matrix || matrix.length === 0) return [];

    // initialize
    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // move right
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++; // shrink top boundary

        // move down
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--; // shrink right boundary

        // prevent duplicates (if it is still valid)
        // move left
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--; // shrink bottom boundary
        }

        // move up
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++; // shrink left boundary
        }
    }

    return result;
};