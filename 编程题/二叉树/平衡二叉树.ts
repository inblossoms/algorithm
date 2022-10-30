// 递归法
function isBalanced(root: TreeNode | null): boolean {
  function getDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    let leftDepth: number = getDepth(root.left);
    if (leftDepth === -1) return -1;
    let rightDepth: number = getDepth(root.right);
    if (rightDepth === -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) return -1;
    return 1 + Math.max(leftDepth, rightDepth);
  }
  return getDepth(root) !== -1;
}
