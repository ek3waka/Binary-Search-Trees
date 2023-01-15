import { TreeNode } from "./treenode.js"

class BinaryTree {
    constructor() {
        this.tree = {
            
        }
    }
    buildTree(array) {
        const sortedArray = this.#sortArray(array)
        this.tree.value  = this.#findRootElement(sortedArray)
        
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
    #findRootElement(preparedArray) {
        let rootElement
        if (preparedArray.length % 2 == 1) {
            rootElement = preparedArray[(preparedArray.length-1)/2]
        }
        else {
            rootElement = preparedArray[preparedArray.length/2-1]
        }
        console.log(rootElement)
        return rootElement
    }
}

export { BinaryTree }