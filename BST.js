'use strict'; 

class BinarySearchTree{ 
    constructor(key=null, value=null, parent=null){ 
        this.key = null; 
        this.value = null; 
        this.parent = null; 
        this.left = null; 
        this.right = null; 
    }

    insert(key, value){ 
        if (this.key == null) { 
            this.key = key; 
            this.value = value; 
        }
        else if (key < this.key) { 
            if (this.left == null) { 
                this.left = new BinarySearchTree(key, value, this); 
            }
            else { 
                this.left.insert(key, value); 
            }
        }
        else if (key > this.key) { 
            if (this.right == null) { 
                this.right = new BinarySearchTree(key, value, this); 
            }
            else { 
                this.right.insert(key, value); 
            }
        }
    }

    remove(){ 

    }

    find(){ 

    }
}

module.exports = BinarySearchTree; 