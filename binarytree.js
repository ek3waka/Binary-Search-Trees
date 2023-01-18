import { TreeNode } from "./treenode.js"

class BinaryTree {
    constructor() {
        this.tree = {
            
        }
    }
    buildTree(array) {
        const sortedArray = this.#sortArray(array)
        this.tree.root = new TreeNode(this.#divideArray(sortedArray).node, 
                            this.#divideArray(sortedArray).leftChild,
                            this.#divideArray(sortedArray).rightChild)
        let currentArray = this.tree.root.leftChild
        let currentNode = this.tree.root
        while (currentArray.length > 1) {
            const newNode = new TreeNode(this.#divideArray(currentArray).node, 
                            this.#divideArray(currentArray).leftChild,
                            this.#divideArray(currentArray).rightChild)
            currentNode.leftChild = newNode
            currentNode = newNode
            currentArray = currentNode.leftChild
        }
        
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
    #divideArray(array) {
        let divided = {
                leftChild: null,
                node: null,
                rightChild: null,
        }
        if (array.length == 1) {
            divided.node = array[0]
        }
        let centralElement = this.#findCentralElement(array)
        let leftSide = array.slice(0, array.indexOf(centralElement))
        let rightSide = array.slice(array.indexOf(centralElement)+1)

        divided.leftChild = leftSide
        divided.node = centralElement
        divided.rightChild = rightSide

        if (array.length == 2) {
            divided.rightChild = null
        }
        
        return divided
        
    }
}

export { BinaryTree }