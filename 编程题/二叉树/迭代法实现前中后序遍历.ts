// 前序遍历
function preorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return [];

  let res: number[] = [],
    hlperStack: TreeNode[] = [],
    curNode: TreeNode = root;

  hlperStack.push(curNode);

  const len = hlperStack.length;
  while (len > 0) {
    curNode = hlperStack.pop()!;
    res.push(curNode.val);

    if (curNode.right !== null) hlperStack.push(curNode.right);
    if (curNode.left !== null) hlperStack.push(curNode.left);
  }

  return res;
}

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

// 后序遍历（迭代法）
function postorderTraversal(root: TreeNode | null): number[] {
  let helperStack: TreeNode[] = [];
  let res: number[] = [];
  let curNode: TreeNode;
  if (root === null) return res;
  helperStack.push(root);
  while (helperStack.length > 0) {
    curNode = helperStack.pop()!;
    res.push(curNode.val);
    if (curNode.left !== null) helperStack.push(curNode.left);
    if (curNode.right !== null) helperStack.push(curNode.right);
  }
  return res.reverse();
}
