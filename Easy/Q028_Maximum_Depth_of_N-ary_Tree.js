/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
const root = {
    'val': 1,
    'children': [{
        'val': 3,
        'children': [{
                'val': 5,
                'children': []
            },
            {
                'val': 6,
                'children': []
            }
        ]
        },
        {
            'val': 2,
            'children': []
        },
        {
            'val': 4,
            'children': []
        }
    ]
}
var maxDepth = function(root) {
    if(!root) return 0;
    let stack = [root];
    let maxD = 1,
        curentD = 1
    while (stack.length > 0) {
        let currentNode = stack[0];
        if (currentNode.children && currentNode.children.length > 0 && !currentNode.visited) {
            stack.unshift(...currentNode.children);
            currentNode.visited = true
            curentD++
            if(curentD > maxD) maxD = curentD
        } else {
            if(currentNode.visited) curentD--
            stack.shift()
        }
    }
    return maxD;
};

console.log(maxDepth(root))