// 递归法（前序遍历）
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  let tempNode: TreeNode | null = root.left;
  root.left = root.right;
  root.right = tempNode;
  invertTree(root.left);
  invertTree(root.right);
  return root;
}

// 递归法（后序遍历）
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  invertTree(root.left);
  invertTree(root.right);
  let tempNode: TreeNode | null = root.left;
  root.left = root.right;
  root.right = tempNode;
  return root;
}

// 递归法（中序遍历）
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  invertTree(root.left);
  let tempNode: TreeNode | null = root.left;
  root.left = root.right;
  root.right = tempNode;
  // 因为左右节点已经进行交换，此时的root.left 是原先的root.right
  invertTree(root.left);
  return root;
}
