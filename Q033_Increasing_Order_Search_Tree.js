/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const root = {
    'val': 5,
    'left': {
        'val': 3,
        'left': {
            'val': 2,
            'left': {
                'val': 1,
                'left': null,
                'right': null
            },
            'right': null
        },
        'right': {
            'val': 4,
            'left': null,
            'right': null
        }
    },
    'right': {
        'val': 6,
        'left': null,
        'right': {
            'val': 8,
            'left': {
                'val': 7,
                'left': null,
                'right': null
            },
            'right': {
                'val': 9,
                'left': null,
                'right': null
            }
        }
    }
}
var increasingBST = function (root) {
    if (!root) return {}
    let stack = [root]
    let vals = []
    while (stack.length > 0) {
        let currentNode = stack[0]
        if ((currentNode.left || currentNode.right) && !currentNode.visited) {
            if (currentNode.left) stack.unshift(currentNode.left)
            if (currentNode.right) stack.unshift(currentNode.right)
            currentNode.visited = true
        } else {
            vals.push(currentNode.val)
            stack.shift()
        }
    }
    vals = vals.sort((a, b) => a - b)
    console.log(vals)
    let output = {}
    let cN = output
    while (vals.length) {
        cN.val = vals.shift()
        if (vals.length > 0) {
            cN.left = null
            cN.right = {}
            cN = cN.right
        }
    }
    return output
};

console.log(increasingBST(root))