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
        //TREE IS EMPTY: INSERT ROOT NODE
        if (this.key == null) { 
            this.key = key; 
            this.value = value; 
        }
        //KEY IS LESS THAN THIS KEY
        else if (key < this.key) { 
            //IF NOTHING TO THE LEFT OF THIS KEY: INSERT NODE
            if (this.left == null) { 
                this.left = new BinarySearchTree(key, value, this); 
            }
            //TRAVERSE LEFT
            else { 
                this.left.insert(key, value); 
            }
        }
        //KEY IS GREATER THAN THIS KEY
        else if (key > this.key) { 
            //IF NOTHING TO THE RIGHT OF THIS KEY: INSERT NODE
            if (this.right == null) { 
                this.right = new BinarySearchTree(key, value, this); 
            }
            //TRAVERSE RIGHT
            else { 
                this.right.insert(key, value); 
            }
        }
    }
    _replaceWIth(node) { 
        if (this.parent) { 
            //REPLACE NODE WITH LEFT CHILD
            if (this == this.parent.left) { 
                this.parent.left = node; 
            }
            //REPLACE NODE WITH RIGHT CHILD
            else if (this == this.parent.right) { 
                this.parent.right = node; 
            }
            if (node) { 
                node.parent = this.parent; 
            }
        }
        else { 
            if (node) { 
                this.key = node.key; 
                this.value = node.value; 
                this.left = node.left; 
                this.right = node.right; 
            }
            else { 
                this.key = null; 
                this.value = null; 
                this.left = null; 
                this.right = null; 
            }
        }
    }

    _findMin() {
        //NOTHING TO LEFT OF THIS NODE
        if (!this.left) { 
            return this; 
        }
        //TRAVERSE LEFT
        return this.left._findMin(); 
    }

    remove(key){
        //FOUND THE KEY WE WISH TO REMOVE
        if (this.key == key) {
            //KEY HAS TWO CHILD NODES
            if (this.left && this.right) {
                //FIND THE MIN VALUE IN THE RIGHT SUBTREE
                const successor = this.right._findMin(); 
                //REPLACE VALUE OF THE NODE TO BE REMOVED W/ FOUND
                this.key = successor.key; 
                this.value = successor.value; 
                //REMOVE THE DUPLICATE
                successor.remove(successor.key); 
            }
            //KEY ONLY HAS LEFT CHILD NODE
            else if (this.left && !this.right) { 
                this._replaceWith(this.left); 
            }
            //KEY ONLY HAS RIGHT CHILD NODE
            else if (this.right && !this.left) { 
                this._replaceWith(this.right); 
            }
            //KEY HAS NO CHILD NODES
            else { 
                this._replaceWith(null); 
            }
        }
        //KEY IS LESS THAN THIS KEY -> TRAVERSE LEFT
        else if (key < this.key && this.left) { 
            this.left.remove(key); 
        }
        //KEY IS GREATER THAN THIS KEY <- TRAVERSE RIGHT
        else if (key > this.key && this.right) { 
            this.right.remove(key); 
        }
        else { 
            throw new Error('Problem with key')
        }
    }

    find(key){ 
        //FOUND THE KEY: RETURN THE VALUE
        if (this.key == key) { 
            return this.value; 
        }
        //KEY IS LESS THAN THIS KEY <- TRAVERSE LEFT
        else if (key < this.key && this.left) { 
            return this.left.find(key); 
        }
        //KEY IS GREATER THAN THIS KEY -> TRAVERSE RIGHT
        else if (key > this.key && this.right) { 
           return this.right.find(key); 
        }
       else { 
           throw new Error('Prblem with key'); 
       }
    }
}

module.exports = BinarySearchTree; 