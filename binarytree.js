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
        return this.#deleteNode(this.tree, value)
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
        if (node.value && (value === node.value)) return node
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



    #insertNode(node, value) {
        if (node === null) {
            node = new TreeNode(value)
            return node
        }
        if (value > node.value) {
            node.rightChild = this.#insertNode(node.rightChild, value)
            
        } else if (value < node.value) {
            node.leftChild = this.#insertNode(node.leftChild, value)
 
        } return node
    }

    #deleteNode(node, value) {
        if (node.rightChild.value === value) {
            if (!node.rightChild.rightChild && !node.rightChild.leftChild) {
                node.rightChild == null
            } else if (node.rightChild.leftChild && !node.rightChild.rightChild){
                node.rightChild = node.rightChild.leftChild
            } else if (!node.rightChild.leftChild && node.rightChild.rightChild) {
                node.rightChild = node.rightChild.rightChild
            }
        }
        if (node.leftChild.value === value) {
            if (!node.leftChild.rightChild && !node.leftChild.leftChild) {
                node.leftChild == null
            } else if (node.leftChild.leftChild && !node.leftChild.rightChild){
                node.leftChild = node.leftChild.leftChild
            } else if (!node.leftChild.leftChild && node.leftChild.rightChild) {
                node.leftChild = node.leftChild.rightChild
            }
        }

        if ((value > node.value) && node.rightChild) {
            this.#deleteNode(node.rightChild, value)
            return node
        } else if ((value < node.value) && node.leftChild) {
            this.#deleteNode(node.leftChild, value)
            return node
        } return node
        
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