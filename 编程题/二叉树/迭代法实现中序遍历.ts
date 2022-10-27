// 中序遍历（迭代法）
function inorderTraversal(root: TreeNode | null): number[] {
  let helperStack: TreeNode[] = [];
  let res: number[] = [];

  if (root === null) return res;

  let curNode: TreeNode | null = root;
  while (curNode !== null || helperStack.length > 0) {
    if (curNode !== null) {
      helperStack.push(curNode);
      curNode = curNode.left;
    } else {
      curNode = helperStack.pop()!;
      res.push(curNode.val);
      curNode = curNode.right;
    }
  }

  return res;
}
