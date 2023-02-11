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


//3. Write a javascript function to find if a year is a leap year or not?
function isLeapYear(inputYear){
    if(typeof inputYear === 'number' && !isNaN(inputYear)) {
        let result = false;
        if((inputYear % 4 === 0) && (inputYear % 100 !== 0 || inputYear % 400 === 0)) {
            result = true;
        }

        return result;
    }

    return "Please enter a valid number as year"
}


//4.Write a JavaScript program where the program takes a random integer between 1 to 10, . If the user input matches with guess number, the program will return true else false.

function isGuessMatch (inputNumber) {
    if(typeof inputNumber === 'number' && !isNaN(inputNumber)) {
        let randomNumber = Math.floor(Math.random() * 10 + 1 );
        console.log(randomNumber)
        if(inputNumber === randomNumber)
        return true;
        else return false;
    }

    return "Please enter a valid number"
}

