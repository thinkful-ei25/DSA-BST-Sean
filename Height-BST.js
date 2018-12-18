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

module.exports = getHeight; 