/*
    INPUT: 
       2    
    1       4
        5       6
                7   9
    OUTPUT: 4

    INPUT: 
    3
    OUTPUT: 1

    INPUT: 
        7
     5     8
                9
    OUTPUT: 3 

    INPUT: 
        6
    3       8
2       4
            5
    
*/

function getHeight(node) { 
    if (node == null) return -1; 

    return 1 + Math.max(getHeight(node.left), getHeight(node.right)); 
}


/*
    input: 3
        1    4
    output : true

    input: 
            2 
        4        1
    output: false


*/
function isBST(node, min=Math.min, max=Math.max) { 

    if (node == null) { 
        return true; 
    }

    if (node.value < min || node.value > max) { 
        return false; 
    }

    return (isBST(node.left, min, node.value - 1) &&
        isBST(node.right, node.value + 1, max))

}

function isBalanced(node) { 
   let lh; 
   let rh; 

   if (node == null)  { 
       return true; 
   }

   lh = getHeight(node.left); 
   rh = getHeight(node.right); 

   if (Math.abs(lh -rh) <= 1 && isBalanced(node.left) && isBalanced(node.right)) return true; 

   return false; 

}
module.exports = {getHeight, isBST}; 