/*
-----------------------
Number Related Problems
-----------------------
*/

/*
1.Create a function that takes two numbers as arguments and returns their sum 
  For invalid input, return a string error message
*/

function addition(a, b) {
    if(typeof a === 'number' && typeof b === "number" && arguments.length >= 2 && !isNaN(a) && !isNaN(b) )
	return a + b;

    else return "Please enter a valid number or enter at least two numbers"
}


/*
2.Create a function that takes any numbers as arguments and returns their sum.
For invalid input, return a string error message
*/

function sumNumbers(){
    let errorMessage = "";
    
    if(arguments.length >= 2 ) {
        let size = arguments.length;
        let sum = 0;
        for(let i=0; i<size; i++){
            if(typeof arguments[i] === "number" && !isNaN(arguments[i]))
            sum += arguments[i]
            
            else errorMessage = "Please enter a valid number"
        }
        
    }

    else errorMessage = "Please enter at least two numbers";

    if(!!errorMessage.length)
    return errorMessage;

    else return sum;
    
}


//Different way

function addNumbers(...numbers){
    let errorMessage = "";
    let sum = 0; 

    if(numbers.length >= 2) {
        
        for(let number of numbers) {
            if(typeof number === 'number' && !isNaN(number))
            sum += number;

            else {
                errorMessage = "Please enter a valid number";
                break;
            }
        }
    }
    
    if(!!errorMessage.length)
    return errorMessage;

    else return sum;
}

//4.Write a function that takes an integer minutes and converts it to seconds.

function convertMinutesToSeconds(minutes) {
    if(typeof minutes === 'number' && !isNaN(minutes))
	return minutes * 60;

    else return "Please enter a valid number for minutes."
}


//5. 4.Write a function that takes an integer hours and converts it to seconds.
function convertHoursToSeconds(hours) {
    if(typeof hours === 'number' && !isNaN(hours))
	return hours * 60 * 60;
    
    else return "Please enter a valid number as hours"
}

//6. Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function incrementByNumber(num, increment) {
    if(typeof num === 'number' && !isNaN(num) && typeof increment === 'number' && !isNaN(increment))
	return num + increment;

    else return "Please enter at least two valid numbers"
}

//7. Write a javascript program to find square root?
function findSquareRoot(number) {
    if(typeof number === 'number' && !isNaN(number))
    return Math.sqrt(number);

    else return "Please enter a valid number as input"
}


//alternative approach

function getSquareRoot(number) {
    if(typeof number === 'number' && !isNaN(number))
    return number ** 0.5;

    else return "Please enter a valid number as input"

}

//8. Write a function that takes the radius of a circle and return its area.

function areaCircle(radius){
    const PI = 3.1416;
    if(typeof radius === 'number' && !isNaN(radius))
    return PI * radius * radius;

    else return "Please enter a valid number for radius"
}


//9. Write a javascript program to calculate area of a triangle?

function findTriangleArea(base,height) {
    if(typeof base === "number" && !isNaN(base) && typeof height === "number" && !isNaN(height))
    return 0.5 * base * height;

    else return "Please enter valid number for base and height"
}
 

//10. Create a function that takes the age in years and returns the age in days.

function findAgeDays(birthYear){
    if(typeof birthYear === 'number' && !isNaN(birthYear)) {
        let age = 0,numberOfDays = 0;
        let currentYear = new Date().getFullYear();
        age = currentYear - birthYear;
        for(let i=birthYear+1; i<=currentYear; i++) {
            if(isLeapYear(i) )
                numberOfDays += 366;
            
            else numberOfDays += 365;
        }
        return age;
    }

    else return "Please enter a valid nummber"
}

/*
11. Write a function to swap variables
It takes two numbers as input and returns an array after swapping the values
*/
function swapVariables(firstNumber,secondNumber){
    if(typeof firstNumber === "number" && !isNaN(firstNumber) && typeof secondNumber === "number" && !isNaN(secondNumber)) {
        [secondNumber,firstNumber] = [firstNumber,secondNumber];
        return [firstNumber,secondNumber];
    }
    
    else return "Please enter a valid number"
}


//Alternative approach
function swapVariable(firstNumber,secondNumber){

    if(typeof firstNumber === 'number' && !isNaN(firstNumber) && typeof secondNumber === 'number' && !isNaN(secondNumber)) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
        return [firstNumber,secondNumber];
    }

    else return "Please enter valid number as input"
}


//12. Write a javascript program to convert Kilogram into miles?

function kilogramToMiles(kilogram){
    if(typeof kilogram === 'number' && !isNaN(kilogram))
    return 0.621 * kilogram;

    else return "Please enter a valid number for celcius";
}

//13. Write a javascript program to convert Celcius to Farenhite?
function celciusToFarenhite(celcius) {
    if(typeof celcius === 'number' && !isNaN(celcius)) {
        let result = ((9/5) * celcius) + 32;
        return result;
    }
   
    else return "Please enter a valid number for celcius";
}


//14. Write a function that returns integer remainder of two numbers
function findRemainder(x, y) {
    if(typeof x === 'number' && typeof y === 'number' && !isNaN(x) && !isNaN(y))
	return parseInt(x % y);

    else return "Please enter valid numbers as input";
}

//15. Write a function that returns first letter of a text?
function getFirstLetter(text) {
    if(typeof text === "string")
    return text[0];
    
    else return "Please enter only string as input"
}

//16. Create a function that takes length and width and finds the perimeter of a rectangle.

function rectanglePerimeter(length, width) {
    if(typeof length === "number" && typeof width === "number" && !isNaN(length) && !isNaN(width))
    return 2 * (length * width);

    else return "Please enter only number as input"
}

//17. Create a function that takes radius and find the perimeter of a circle.

function circlePerimeter(radius) {
    if(typeof radius === 'number') {
        const PI = 3.1416;
        return 2 * PI * radius;
    }

    else return "Please enter a valid number";


}
//18. Write a javascript program to generate a random number between two input numbers (first included and second excluded)?

function generateRandomNumber(min, max) {
    if(typeof min === "number" && !isNaN(min) && typeof max === "number" && !isNaN(max))
    return Math.floor(Math.random() * (max - min) + 1);

    else return "Please enter only numbers";
}

//19. Write a javascript prorgam which takes an input as a number and returns fibonacci series until a number?
function getFibonacciSeries(inputNumber) {
    if(typeof inputNumber === 'number') {
        let fibonacciSeries = [];
        fibonacciSeries[0] = 0;
        fibonacciSeries[1] = 1;
    
    for (let i=2; i<inputNumber; i++) {
        fibonacciSeries[i] = fibonacciSeries[i-1] + fibonacciSeries[i-2];
        fibonacciSeries.push(fibonacciSeries[i]);
    }

        return fibonacciSeries;
    }

    else return "Please enter a valid number!!!"
    

}


//20. Write a javascript program which takes two input numbers and finds out if they have same last digit? 
function isSameLastDigit (number1, number2) {
    if(typeof number1 === "number" && typeof number2 === "number") {
        number1 = number1.toString();
        number2 = number2.toString();
        if (number1[number1.length - 1] = number2[number2.length-1]) {
            return true;
        }

        else return false
    }

    else return "Please enter a valid number"
}


//same problem with unknown input
function areSameLastDigits(...inputNumbers) {
    let errorMessage = "";
    let isSameLastDigit = false;
    if(!!inputNumbers.length) {
        if(inputNumbers.length >= 2) {
            for(let i=0; i<inputNumbers.length; i++) {
                if(typeof inputNumbers[i] === 'number') {
                    inputNumbers[i] = inputNumbers[i].toString();
                    if(i >= 1) {
                        if(inputNumbers[i][inputNumbers[i].length-1] === inputNumbers[i-1][inputNumbers[i-1].length-1] ) {
                            console.log(inputNumbers[i], inputNumbers[i-1])
                            isSameLastDigit = true;
                        }

                        else {
                            isSameLastDigit = false;
                            break;
                        }
                    }
                }

                else {
                    errorMessage = "Please enter only numbers as input."
                    break;
                }
            }

            if(!!errorMessage)
            return errorMessage;
        
            else return isSameLastDigit;
        
            
        }
        else {
            errorMessage = "Please enter atleast two numbers as input"
            return errorMessage
        }
    }

    else errorMessage = "Please enter input";

    return errorMessage;
    
}



//19. Write a program to find an armstrong number?

function isArmstrongNumber(number) {
    if(typeof number === 'number') {
        let remainder, result = 0, divisionResult = input, isArmstrong = false, tempInput,numberOfDigits;
        tempInput = input;
        numberOfDigits = input.toString().length;
        do {
            divisionResult = parseInt(tempInput / 10);
            remainder = tempInput % 10;
            result += (remainder ** numberOfDigits);
            tempInput = divisionResult;
        }while(tempInput !== 0);

        if(result === input) {
            isArmstrong = true;
        }
    
    
        return isArmstrong;
    }
    

    else return "Please enter a valid number"
    
}

//20.Write a program to find a list  of armstrong numbers between a given interval?

function getArmstrongNumbers(min, max){

    if(typeof min === "number" && typeof max === "number") {
        let armstrongNumberList = [];
        for(let i = min; i <= max; i++){
            if(isArmstrongNumber(i))
            armstrongNumberList.push(i);
            
        }
    
        return armstrongNumberList;
    }
   

    else return "Please enter a valid number"
}


//21. Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

function isMultiple7Or3 (number) {
    if(checkNumber(number)) {
        if(number % 3 === 0 || number % 7 === 0)
        return true;
        else return false;
    }
    else return invalidNumberInputMessage();
}


/*
22. Write a JavaScript program to check whether two given integer values are in the range 50..99 
(inclusive). 
Return true if either of them are in the said range.
*/

function isInRange(num1, num2) {
    if((checkNumber(num1) && !isNaN(num1)) || (checkNumber(num2) && !isNaN(num2))) {
        return (num1 >= 50 && num1 <= 99 ) || (num2 >= 50 && num2 <= 99);
    }

    else return invalidNumberInputMessage()
}


/*
23.Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). 
Return true if one or more of them are in the said range.
*/

function areInRange(num1, num2, num3) {
    if((checkNumber(num1) && !isNaN(num1)) || (checkNumber(num2) && !isNaN(num2))  || (checkNumber(num3) && !isNaN(num3))) {
        return (num1 >= 50 && num1 <= 99 ) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99);
    }

    else return invalidNumberInputMessage()
}


//22. Write a javascript program to generate a random number between a range?

function randomNumberGenerator(max,min){
    return Math.floor(Math.random() * (max - min) ) + min;
}


//23. Write a JavaScript program to find a value which is nearest to given number from two different given integer values.

function findNearestNumber(num1, num2, number) {
    if(checkNumber(num1) && checkNumber(num2) && checkNumber(number)) {
        if(Math.abs(number-num1) < Math.abs(number-num2)) 
        return num1;
        else if(Math.abs(number-num1) < Math.abs(number-num2))
        return num2;
        else return "Both numbers are at same distance"
    }

    else return "Please enter valid number";
}


/*
24.   Write a JavaScript program to find the larger number from the two
 given positive integers, the two numbers are in the range of given range inclusive.
 */

 let findLargerNumberInRange = (num1, num2, minRange, maxRange) => {
    if(checkNumber(num1) && checkNumber(num2) && checkNumber(minRange) && checkNumber(maxRange)) {
        if((minRange <= num1 && num1 <= maxRange) && (minRange <= num2 && num2 <= maxRange)) {
            return num1 > num2 ? num1 : num2;
        }
        else return "The numbers must be between the range"
    }

    else return "Please enter number as input"
 }

/*
25. Write a JavaScript program to check three given numbers,
 if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
*/

function isSameNumber(num1, num2, num3) {
    if(checkNumber(num1) && checkNumber(num2) && checkNumber(num3)) {
        if(num1 === num2 && num2 === num3)
        return 30;

        else if(num1 === num2 || num2 === num3 || num1 === num3)
        return 40;

        else return 20;
    }

    else return invalidNumberInputMessage();
}


/*
25. Write a JavaScript program to check from three given numbers (non negative integers) that two or 
all of them have the same rightmost digit. 
*/

function isSameRightMostDigit(num1, num2, num3) {
    if(checkNumber(num1) && checkNumber(num2) && checkNumber(num3)) {
        num1 = num1.toString();
        num2 = num2.toString();
        num3 = num3.toString();

        if(num1[num1.length-1] === num2[num1.length-1] || num2[num1.length-1] === num3[num1.length-1] || num1[num1.length-1] === num3[num1.length-1])
        return true;

        else return false;
    }

    else return invalidNumberInputMessage();
}





/*
26. Write a JavaScript program to check two given non-negative integers that whether 
one of the number (not both) is multiple of 7 or 11
*/

function isMultiple7Or11(num1, num2) {
    if(checkNumber(num1) && checkNumber(num2)) {
        if(num1 > 0 && num2 > 0) {
            
            if(
                ((num1 % 7 === 0 || num1 % 11 === 0) && (num2 % 7 !== 0 && num2 % 11 !== 0)) ||
                ((num2 % 7 === 0 || num2 % 11 === 0) && (num1 % 7 !== 0 && num1 % 11 !== 0))

            )
            return true;

            else return false;
        }

        else return "Only positive number is acceptable";
    }

    else return invalidNumberInputMessage();
}



