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



//5. Write a javascript program to find the file extension?

function getFileExtension(fileName) {
    if(typeof fileName === 'string' && fileName.includes('.')) {
        let stringArray = fileName.split('.');
        console.log(stringArray)
        console.log(stringArray.length)
        if(stringArray.length > 1 && !!stringArray[stringArray.length-1]){

            return stringArray[stringArray.length-1];
        }

    }

    return "Enter a valid file as input"
}


//6. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

function getDoubleDifference(number) {
    if(typeof number === 'number' && !isNaN(number)) {
        if(number > 13)
        return 2 * (number-13);

        else return 13 - number
    }

    return "Please enter a valid number as user input";
}


//7. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. 

function getTripleSum(num1, num2) {
    if(typeof num1 === "number" && typeof num2 === "number" && !isNaN(num1) && !isNaN(num2)) {
        if(num1 === num2)
        return 3 * (num1 + num2)

        else return num1 + num2;
    }

    return "Please enter a valid number as input"
}


//8. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function getTrippleDifference(number) {
    if(typeof number === 'number' && !isNaN(number)) {
        if(number > 19)
        return 3 * (number - 19)

        return 19 - number;
    }

    return "Please enter a valid number as input"
}



//9. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function is50(num1 , num2) {
    if(checkNumber(num1) && checkNumber(num2)) {
        if(num1 === 50 || (num1 + num2) === 50 || num2 === 50) 
        return true;
        return false;
    }
    return invalidNumberInputMessage()
}



//10.Write a JavaScript program to check from two given integers, whether one is positive and another one is negative. 

function positive_negative(num1, num2) {
    if(checkNumber(num1) && checkNumber(num2)) {
        if(num1 > 0 && num2 < 0 || num1 < 0 && num2 > 0) {
            return true;
        }
        else {
            return false;
        }
        
    }

    return "Please enter a valid number as input"
}


