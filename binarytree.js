import { TreeNode } from "./treenode.js"

class BinaryTree {
    constructor() {
        this.tree = {
            
        }
    }
    buildTree(array) {
        const sortedArray = this.#sortArray(array)
        this.tree.root = new TreeNode(this.#divideArray(sortedArray).node, 
                            this.#divideArray(sortedArray).left,
                            this.#divideArray(sortedArray).right)

        
        
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
        let centralElement = this.#findCentralElement(array)
        let leftSide = array.slice(0, array.indexOf(centralElement))
        let rightSide = array.slice(array.indexOf(centralElement)+1)
        let divided = {
            left: leftSide,
            node: centralElement,
            right: rightSide,
        }
        return divided
        
    }
}

export { BinaryTree }