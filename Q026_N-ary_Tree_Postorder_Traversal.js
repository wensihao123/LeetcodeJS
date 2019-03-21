/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
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

var postorder = function(root) {
    if(!root) return [];
    let result = [];
    let stack = [root];
    while (stack.length > 0) {
        let currentNode = stack[0];
        if (currentNode.children && currentNode.children.length > 0 && !currentNode.visited) {
            stack.unshift(...currentNode.children);
            currentNode.visited = true
        } else {
            result.push(currentNode.val)
            stack.shift()
        }
    }
    return result;
}; 

console.log(postorder(root))