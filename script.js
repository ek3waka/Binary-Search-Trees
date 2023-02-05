import { BinaryTree } from "./binarytree.js"
import { TreeNode } from "./treenode.js"

const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  )

const array = generateArray(20, 45) 
console.log(array)

const binaryTree = new BinaryTree()

binaryTree.buildTree(array)



binaryTree.prettyPrint(binaryTree.tree)

//binaryTree.find(4)

binaryTree.insert(13)
//binaryTree.insert(100)
console.log(binaryTree)
binaryTree.prettyPrint(binaryTree.tree)
