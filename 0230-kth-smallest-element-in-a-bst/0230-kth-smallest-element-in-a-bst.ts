/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    let count = 0;
    let result = null;

    function inOrder(node) {
        if (!node || result !== null) return;

        inOrder(node.left);
        count++;

        if (count === k) return result = node.val;

        inOrder(node.right);
    }

    inOrder(root);
    return result;
};