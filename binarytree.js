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

    }
    delete(value) {

    }
    find(value) {

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
    #findCentralElement(array) {
        let centralElement
        if (array.length % 2 == 1) {
            centralElement = array[(array.length-1)/2]
        }
        else {
            centralElement = array[array.length/2]
        }
        return centralElement
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
}

export { BinaryTree }