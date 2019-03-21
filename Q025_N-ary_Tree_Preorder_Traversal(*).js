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
    'children': [
        {
            'val': 2,
            'children': []
        },
        {
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
            }
        ,
        {
            'val': 4,
            'children': []
        }
    ]
}

const output = []
var orderNode = (node) => {
    if(node && node.val !== null) output.push(node.val)
    else return 
    if(node.children.length){
        node.children.forEach(childnode => {
            preorder(childnode)
        })
    }
}
var preorder = function (root) {   
    orderNode(root)
    return output
};

var preorder1 = (root) => {
    if(!root) return [];
    let result = [];
    let stack = [root];
    while (stack.length > 0) {
        let currentNode = stack[0];
        let removeIndex;
        result.push(currentNode.val);
        if (currentNode.children && currentNode.children.length > 0) {
            stack.unshift(...currentNode.children);            
            removeIndex = currentNode.children.length;
        }
        stack.splice(removeIndex, 1);
    }

    return result;
}

console.log(preorder1(root))