/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const root  = {
    'val' : 2,
    'left' : {
        'val': 1,
        'left': null,
        'right': {
            'val' : 3,
            'left': null,
            'right': null
        }
    },
    'right' : {
        'val': 4,
        'left': null,
        'right': {
            'val' : 5,
            'left': null,
            'right': null
        }
    }
}

var searchBST = function(root, val) {
    
};