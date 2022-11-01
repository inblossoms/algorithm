// 后续遍历（自下而上）
function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 前序遍历(自上而下)
function maxDepth(root: TreeNode | null): number {
    function recur(node: TreeNode | null, count: number) {
        if (node === null) {
            resMax = resMax > count ? resMax : count;
            return;
        }
        recur(node.left, count + 1);
        recur(node.right, count + 1);
    }
    let resMax: number = 0;
    let count: number = 0;
    recur(root, count);
    return resMax;
};

// 层序遍历（迭代法）
function maxDepth(root: TreeNode | null): number {
    let helperQueue: TreeNode[] = [];
    let resDepth: number = 0;
    let tempNode: TreeNode;
    if (root !== null) helperQueue.push(root);
    while (helperQueue.length > 0) {
        resDepth++;
        for (let i = 0, length = helperQueue.length; i < length; i++) {
            tempNode = helperQueue.shift()!;
            if (tempNode.left) helperQueue.push(tempNode.left);
            if (tempNode.right) helperQueue.push(tempNode.right);
        }
    }
    return resDepth;
};