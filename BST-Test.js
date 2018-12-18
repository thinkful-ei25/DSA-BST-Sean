const BinarySearchTree = require('./BST'); 
const {getHeight, isBST} = require('./helpers'); 

function main(){ 
    const BST = new BinarySearchTree(); 
    BST.insert(3); 
    BST.insert(1); 
    BST.insert(4);
    BST.insert(6);
    BST.insert(9);
    BST.insert(2);
    BST.insert(5);
    BST.insert(7);
    console.log(getHeight(BST));    
    console.log(isBST(BST)); 

    const BST2 = new BinarySearchTree(); 
    BST2.insert(2); 
    BST2.insert(3); 
    BST2.insert(4); 
    console.log(getHeight(BST2)); 
    console.log(isBST(BST2))

    
}

main(); 