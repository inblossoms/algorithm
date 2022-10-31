function binaryTreePaths(root: TreeNode | null): string[] {
  function recur(node: TreeNode, route: string, resArr: string[]): void {
    route += String(node.val);
    if (node.left === null && node.right === null) {
      resArr.push(route);
      return;
    }
    if (node.left !== null) recur(node.left, route + "->", resArr);
    if (node.right !== null) recur(node.right, route + "->", resArr);
  }
  const resArr: string[] = [];
  if (root === null) return resArr;
  recur(root, "", resArr);
  return resArr;
}
