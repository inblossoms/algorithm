function levelOrder(root: TreeNode | null): number[][] {
  let helperQueue: TreeNode[] = [];
  let res: number[][] = [];
  let tempArr: number[] = [];
  if (root !== null) helperQueue.push(root);
  let curNode: TreeNode;
  while (helperQueue.length > 0) {
    for (let i = 0, length = helperQueue.length; i < length; i++) {
      curNode = helperQueue.shift()!;
      tempArr.push(curNode.val);
      if (curNode.left !== null) {
        helperQueue.push(curNode.left);
      }
      if (curNode.right !== null) {
        helperQueue.push(curNode.right);
      }
    }
    res.push(tempArr);
    tempArr = [];
  }
  return res;
}
