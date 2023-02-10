/*
--------------
Basic Problems
--------------
*/
//1. Write a JavaScript program to print the contents of the current window.

function printCurrentPage () {
    window.print();
}


//2. Write a javascript program to find the area of the triangle

function calculateTriangleArea (side1, side2, side3) {
    if(typeof side1 === 'number' && typeof side2 === "number" && typeof side3 == "number" && !isNaN(side1) && !isNaN(side2) && !isNaN(side3) ) {
        let s = (side1 + side2 + side3) / 2;
        let area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
        return area;
    }

    return "Please enter number as input"
}
