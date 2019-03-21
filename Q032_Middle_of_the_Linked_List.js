/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const head = {
    'val': 1,
    'next': {
        'val': 2,
        'next': {
            'val': 3,
            'next': {
                'val': 4,
                'next': {
                    'val': 5,
                    'next': {
                        'val': 6,
                        'next': null
                    }
                }
            }
        }
    }
}
var middleNode = function (head) {
    let stack = [head]
    let currentNode = stack[0]
    while(currentNode.next) {
        stack.push(currentNode.next)
        currentNode = currentNode.next
    }
    return stack[Math.floor(stack.length / 2)]
};

console.log(middleNode(head))