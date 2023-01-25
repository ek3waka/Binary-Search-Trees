import { TreeNode } from "./treenode.js"

class BinaryTree {
    constructor() {
        this.tree = {
            
        }
    }
    buildTree(array) {
        const sortedArray = this.#sortArray(array)
        this.tree = this.#createBST(sortedArray, 0, sortedArray.length-1)
        return this.tree    
    }
    insert(value) {
        return this.#insertNode(this.tree, value)
    }
    delete(value) {

    }
    find(value) {
       return this.#findNode(this.tree, value)
    }
    levelOrder(callbackFunction) {

    }
    inorder(callbackFunction) {

    }
    preorder(callbackFunction) {

    }
    postorder(callbackFunction) {

    }
    height() {

    }
    depth() {

    }
    isBalanced() {

    }
    rebalance() {

    }
    #sortArray(array) {
      const sortedArray = [...new Set(array)].sort((a,b)=>a-b)
      console.log(sortedArray)
      return sortedArray
    }
    #findNode(node, value) {
        if (node.value && (value === node.value)) return console.log(node)
        else if ((value > node.value) && node.rightChild) {
            this.#findNode(node.rightChild, value)
            return false
        } else if ((value < node.value) && node.leftChild) {
            this.#findNode(node.leftChild, value)
            return false
        } else return console.log('Not found')
    }

    #createBST(array, start, end) {
        if (start>end) return null
        let mid
        if ((end - start) % 2 == 1) {
            mid = (start + end + 1) / 2 
            }
        else {
            mid = (start + end) / 2
        }
        const root = new TreeNode(array[mid])

        root.leftChild = this.#createBST(array, start, mid-1)
        root.rightChild = this.#createBST(array, mid+1, end)
        return root
    }

    prettyPrint(node, prefix = '', isLeft = true) {
        if (node.rightChild !== null) {
          this.prettyPrint(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        if (node.leftChild !== null) {
          this.prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }

    #insertNode(node, value) {
        if (node == null) {
            node = new TreeNode(value)
            return node
        }
        if (value > node.value) {
            node.rightChild = this.#insertNode(node.rightChild, value)
            
        } else if (value < node.value) {
            node.leftChild = this.#insertNode(node.leftChild, value)
 
        } return node
    }
}

export { BinaryTree }