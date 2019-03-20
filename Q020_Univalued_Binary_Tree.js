/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const root = {
    'val': 0,
    'left': null,
    'right': null
}
const root1 = {
    'val': 1,
    'left': {
        'val': 1,
        'left': {
            'val': 1,
            'left': null,
            'right': null
        },
        'right': null
    },
    'right': {
        'val': 2,
        'left': null,
        'right': null
    }
}
let val = -1

var isUnivalTree = function (root) {
    if(root){
        if (val === -1) val = root.val
        if (val !== root.val) return false
        else {
            let flagL = true,
                flagR = true
            flagL = isUnivalTree(root.left)
            if (flagL) {flagR = isUnivalTree(root.right)} else return false
            return flagR
        }
    }
    return true    
};

var isUnivalTree2 = function(root) {
    return processNode(root, root.val);
};

var processNode = function(node, rootValue) {
    if (node === null) {
        return true;
    }
    return isSameValueAsRoot(rootValue, node) && processNode(node.left, rootValue) && processNode(node.right, rootValue);
}

var isSameValueAsRoot = function(rootValue, node) {
    return node.val === rootValue;
}

console.log(isUnivalTree2(root))