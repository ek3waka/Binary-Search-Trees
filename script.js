import { BinaryTree } from "./binarytree.js"
import { TreeNode } from "./treenode.js"

const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  )

const array = generateArray(9, 25) 
console.log(array)

const binaryTree = new BinaryTree()

binaryTree.buildTree(array)

console.log(binaryTree)