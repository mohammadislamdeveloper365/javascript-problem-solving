//Javascript Problems

/*
Number Related Problems
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



//20.Write a function that takes a number input and determines if it is an armstrong number?

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

//21.Write a program to find a list  of armstrong numbers between a given interval?

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



/*
--------------------------
Javascript String Problems
*/


//22. Write a function that takes an array of voter and number  as input and  and returns the array of ages which are equal or above that number?

function findNumbersOver(array, number) {
    let result = [];
    let size = array.length;
    for(let i=0; i<size; i++ ) {
        if(array[i] >= number) {
            result.push(array[i]);
        }
    }
    return result;
}

//20. Write a function that takes a string and two positions and returns a string between given positions?

function getSlicedString(text, position1, position2) {
    return text.slice(position1-1, (position1-1+(position2-position1 + 1)))
}

/*
21. Write a function that takes a text and string as input. If that text contains that string, 
it returns a value which adds that string at the beginning else if returns a value which adds that string
at the end.
*/

function addString(text,str){
    return text.includes(str) ? str.concat(text) : text.concat(str);
}


//22. Write a javascript program to generate a random number between a range?

function randomNumberGenerator(max,min){
    return Math.floor(Math.random() * (max - min) ) + min;
}

//23. Write a javascript function that removes first nth elements of an array?

function removeFirstElementsArray(arr,input) {
    return arr.slice(input)
}


//24. Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

function removeLastElementsArray(arr,input) {
    return arr.slice(-input)
}

//25.Write a function that takes an array(a) as argument. Extract the first 3 elements of a;

function extractFirstArrayElements(arr,numberOfElements){
    return arr.slice(0,numberOfElements)
}

/*26. Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. 
Return the filtered array. Plz don't use filter function
*/

function filtereArray(array, removeItem) {
    let filteredArray = [];
    let size = array.length;
    for(let i=0; i<=size-1; i++) {
        if(array[i] !== removeItem)
        filteredArray.push(array[i]);
    }
    return filteredArray;
}


//10. Write a javascript program to find a positive,negative or zero?

function checkNumber(input) {
    if(input > 0)
    return 1;
    else if(input < 0)
    return -1;
    else (input == 0)
    return 0;
   
}

//11. Write a javascript program to check if a number is even or odd?

function checkEvenNumber(input) {
    return !(input % 2)
}


//12. Write a program to find the largest number?
function getLargestNumber(...input){
    let largest = input[0];
    input.forEach(value=>{
        largest = value > largest ? value : largest;
    })

    return largest;
}

//13. Write a program to check if a number is prime or not?

function isPrime(input){
    let isPrime = true;
    if(input == 1){
        isPrime = false;
    }

    else if(input == 2) {
        isPrime = true;
    }

    else if(input > 1) {
        for(let i=2; i<input; i++){
            if (input % i === 0){
                isPrime = false;
                break;
            }
        }
    }

    return isPrime;
}


//14. Write a program to find prime numbers between interval?

function getPrimeNumbers(firstNumber, secondNumber) {
     let primeNumbers = [];
     for(let i=firstNumber; i <= secondNumber; i++){
        if(isPrime(i))
        primeNumbers.push(i);
     }
     return primeNumbers;
}

//15. Write a javascript program to find factorial of a number?

function findFactorial(input){
    let result = 1;

    if(input < 0)
    result = NaN;

    else if(input === 0 || input === 1){
        result = 1;
    }

    else if(input > 1) {
        for(let i=input; i>=2; i--){
            result *= i;
        }
    }
    return result;
}

//16. Write a javascript to display multiplication table?
function displayMultiplicationTable(input) {
    let result = [];
    let multiplicationResult;
    for(let i=1; i<=10; i++){
        multiplicationResult = i * input;
        result.push(multiplicationResult);
    }

    return result;
}



//17. Write a program to print the fibonacci series?

function showFibonacciSeries(input){
    let first = 0, second = 1; 
    let result = [first,second];
    for(let i=2; i<input; i++){
        result[i] = result[i-1] + result[i-2];
    }

    return result;
}

//18. Write a program that finds the sum of all digits in a number?

function findDigitSum(input){
   
    let remainder,sum = 0, divisionResult = input;
    
    do {
        divisionResult = parseInt(input / 10);
        remainder = input % 10;
        sum += remainder;
        input = divisionResult;
    }while(input !== 0);

    return sum;
    
}












//22. Write a program which takes an array as input and replaces an item of that array with a new value?

function replaceArrayItem(array,item, newItem) {
    let indexOfItem = array.indexOf(item);
    if(indexOfItem !== -1)
    array[indexOfItem] = newItem;
    return array;
}

//23. You are given an array of integers, replace all of the occurances of elementToReplace with subtractionElement?

function replaceArrayElement (inputArray, elementToReplace,subtractionElement) {
    inputArray.forEach((value,index)=>{
        if(elementToReplace === value){
            inputArray[index] = subtractionElement;
        }
    })

    return inputArray;
}

//24. Write a function that takes two parameters as argument. Return true if both are equal and of same type?

function checkEquality(a,b) {
    return a === b;
}


//25. Write a function that takes a value as argument. Return the type of the value.

function checkType(a){
    return typeof a;
}

//26. Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

function findCharOfString(inputString, inputNumber){
    return inputString[inputNummber-1];
}

//27.Write a function that takes a string as argument. Extract the last input number characters from the string. Return the result?

function findLastStringWords(inputString, inputNummber ){
    return inputString.slice(inputString.length - inputNummber);
}

//28. Write a program that takes a string as argument. Extract the first input number character from the string
function findFirstStringWords(inputString, inputNummber ){
    return inputString.slice(0,inputNummber);
}

//29. Remove the first input number characters of a string?
function removeFirstStringWords(inputString, inputNumber) {
    return inputString.slice(inputNumber);
}


//30. Write a function that takes a string as argument. The string contains the substring givenInput. Return the index of givenInput.
function indexOfString(inputString, inputSubString) {
    return inputString.indexOf(inputSubString)
}

//31. Write a function that extract first half of the string;
function sliceHalfString(inputString){
    return inputString.slice(0, inputString.length / 2);
}

//32. Write a function that takes a string as input, removes last inut number of characters from and return the new string?

function removeLastStrings(inputString, inputNumber) {
    return inputString.slice(0, inputString.length-inputNummber)
}

//33. Write a function to find if a year is a leap year?

function isLeapYear(inputYear){
    let result = false;
    if((inputYear % 4 === 0) && (inputYear % 100 !== 0 || inputYear % 400 === 0)) {
        result = true;
    }

    return result;
}




//34. Write a function that returns odd numbers from a given numbers of input?
function findOddNumbers(inputArray){
    let result = [];
    let size = inputArray.length;
    for(let i=0; i<size; i++) {
        if(inputArray[i] % 2 !== 0) {
            result.push(inputArray[i]);
        }
    }
    return result;
}


//35. Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

function appendString(inputString, inputWord) {
   return inputString.includes(inputWord) ?(inputWord + inputString):inputString.concat(inputWord);
}


//36. Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

function getCharacterOccurence(a, b) {
   let occurences = 0;
   let size = b.length;
   for(let i=0; i<size; i++) {
        if(b[i] === a)
        occurences += 1;
   }
   return occurences;
}

//37. Write a function that checks if the input number is a whole number?

function isWholeNumber(number) {
    return number % 1 === 0;
}


//38. Write a function that takes a string parameter and returns it in a reverse order?

function reverseString(inputString) {
    let reversedResult = '';
    let size = inputString.length;
    for(let i=size-1; i>=0; i--) {
        reversedResult = reversedResult.concat(inputString[i])
        console.log(reversedResult)
    }

    return reversedResult;
}


//39. Write a function that reverses the words of a string?

function reverseTextWord(inputText){
    let reversedText = [];
    let arrayOfInput = inputText.split(" ");
    let size = arrayOfInput.length;
    for(let i=size-1; i>=0; i--){
        reversedText.push(arrayOfInput[i]);
    }
    return reversedText.join(" ");
}


//40. Write a function solution that takes an alphabet as a function parameter and print whether it is VOWEL or CONSONANT?

function isVowel(input) {
    let isVowel = false;
    switch(input){
        case 'a' :
        case 'e' :
        case 'i' :
        case 'o' :
        case 'u' :
        case 'A' :
        case 'E' :
        case 'I' :
        case 'O' :
        case 'U' :
        isVowel = true;
        break;
        default:
        isVowel = false;
    }

    return isVowel;
}

/*41. Suppose you want to create a shopping cart where it will calculate the total price of the products 
added. Implement a function totalCost that will take an array of objects where each object will have 
two properties: name and price. The function totalCost will take the array of objects as a parameter 
and return the total price of the products added to the shopping cart.
*/

const totalCost = (products) => {
    let sum = 0;
    products.forEach(value=>{
        sum += value.price;
    })
    return sum;
};


/*
42. Write a function deleteProp which takes an array. The first element will be an object, and the second element will be a string prop.
If the object(first element) has a property prop, the function removes the property from the object and returns ’YES’; in all other cases it returns’NO’.
*/

const deleteProperty =(arr)=>{
    if(arr[1] in arr[0]) {
        delete arr[0]['property'];
        return "YES"
    }
    else 
    return 'NO'
}



/*
Can a write a function which compares two string irrespective of their case?
*/

function isStringEqual(input1, input2) {
    return input1.toLowerCase() === input2.toLowerCase();
}

/*
44.Write a function that takes two input and check if second input exists irrespective of entire string in first String
*/

function doesExist(inputString, searchString) {
    return inputString.toLowerCase().includes(searchString.toLowerCase());
}

/*
45. Write a function that takes two input and check if second input exactly exists irrespective of case?
*/


// 46. Write a function which removes duplicate items from an array?

function removeDuplicateItems(inputArray){
    let newArray = [];
    for(let value of inputArray){
        if(!newArray.includes(value)){
            newArray.push(value);
        }
    }
    return newArray;
}

//47. write a function which prints foo if an input is divisible by 3, prints boo if divisible by 5 prints fooboo if divisible by both or else return input?

function printFooBoo(input){
    if(input % 3 == 0 && input % 5 == 0){
        return "fooboo"
    }

    else if(input % 3 == 0) {
        return "foo";
    }

    else if(input % 5 == 0) {
        return "boo"
    }
    
    else return input;
}



//48. Find the cheapest phone from an array of phone objects?

function getCheapest(inputArray) {
    let cheapestPhone = inputArray[0];
    for(let object of inputArray) {
        if(cheapestPhone.price > object.price ) {
            cheapestPhone = object;
        }
    }

    return cheapestPhone;
}



//49. Find the total price from a shopping cart?

function findTotal(inputArray){
    let sum = 0;
    let size = inputArray.length;
    for(let i = 0; i<size; i++) {
        let item = inputArray[i];
        sum += item.price * item.number;
    }
    
    return sum;
}



//50. Write a function that prints number between a range?

function showIntervals(num1, num2) {
    let result = [];
    for(let i= num1; i<=num2; i++) {
        result.push(i);
    }
    return result;
}


//51. Write a function that calculates the sum of odd numbers of a given interval?

function getOddSum(num1, num2) {
    let result = 0;
    for(let i=num1; i<=num2; i++) {
        if(i % 2 !== 0) {
            result += i;
        }
    }
    return result;
}


//52. Write a function that calculates the sum of even numbers from an array?

function getEvenSum(inputArray){
    let sum = 0;
    let size = inputArray.length;
    for(let i=0; i<size; i++) {
        if(inputArray[i] % 2 === 0) {
            sum += inputArray[i];
        }
    }
    return sum;
}



//53. Write a function that rotates an array to input number of left positon?

function rotateArrayLeft(inputArray, number) {
    let removedArray = [];
    let result = [];
    for(let i=1; i<= number; i++) {
        removedArray.push(inputArray.shift());
    }
    
    result = inputArray.concat(removedArray);
    
    return result;

}




//54. Write a function that takes an array and reverses it?

function reverseArray(inputArray) {
    let reversedArray = [];
    let size = inputArray.length;
    for(let i=size-1; i>=0; i--) {
        reversedArray.push(inputArray[i]);
    }

    return reversedArray;
}

/*
56.Create a function that will receive two arrays of numbers as arguments and return an 
array composed of all the numbers that are either in the first array or second array but not in both
*/

/*
57.Write a function that takes input as numbers and return sum?
*/

function getSum(){
    let sum = 0;
    let size = arguments.length - 1;
    for(let i=0; i<=size;i++){
        sum += arguments[i]
    }

    return sum;
}


/*
58. Write a function that converts minutes to seconds?
*/
function minutesToSeconds (minute) {
    let seconds = minute * 60;
    return seconds;
}


/*
59. Create a function that takes two numbers as arguments, increments the number by +1 and returns the result.
*/

function incrementNumber(number,incrementValue) {
    return number + incrementValue;
}



/*
60.Create a function that takes an array containing only numbers and return the first element?
*/

function getFirstElementArray(inputArray) {
    return inputArray[0]
}


/*
61. Write a function that calculates perimeter of a rectangle?
*/

function findPerimeter(a,b,c,d) {
    if(a && b && c && d) 
    return a + b + c + d;
}


/*
62.Write a function that takes circuit voltage and current. Find power?
*/
function getCircuitPower(voltage, current) {
    return voltage * current;
}

/*
63. Write a function that converts hours into seconds.
*/

function hoursToSeconds(hours) {
    return hours * 60 * 60;
}

/*
64. Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
*/
function nextEdge(edge1, edge2) {
    return edge1 + edge2 -1;
}

/*
65. Write a function that returns a remainder from two inputs?
*/

function remainder(number1, number2) {
    return number1 % number2;
}

/*
66. Write a function that returns the string "something" joined with a space " " and the given argument a.
*/

function giveMeSomething(a) {
	return `something ${a}`;
}

/*
67. Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
*/

function sumPolygon(n){
    if(n>2)
    return (n-2) * 180;
}


/*
68. A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and returns it .
*/

function greetMessage(name){
    let greet = "Welcome To Javascript";
    return name.concat(" ",greet);
}





function mindGame(positiveNumber) {
    /*
    This function takes a positive number from user and returns a value based on the input
    The user input must be a positive number
    Otherwise an error message will be returned
    */
    if (typeof positiveNumber === "number" ) {
        if(positiveNumber > 0) {
            return ((positiveNumber * 3) + 10) / 2 - 5;
          }
      
        else return "Enter a positive number please!!!!" 
    }

    else return "Please don't enter anything except number!!!"
   
}


function evenOdd(inputString) {
    /*
     Expects an  string input from user and returns "even" or "odd"
     based on the length of string.
     The user input must be string
     Otherwise an error message will be returned
     */
    if(typeof inputString === "string") {
        return inputString.length % 2 === 0 ? "even" : "odd"
    }
    else return "Sorry!!! Invalid user input. Please only string text is allowed"
}



function isLGSeven(inputNumber) {
    /*
    Takes an user input as number.
    Subtracts 7 from input. If the result < 7, result is returned else the double of the input is returned
    The user input must be a number
    Otherwise an error message will be returned
    */
    if(typeof inputNumber === "number" && !isNaN(inputNumber)) {
        let result =  inputNumber - 7;
        return result < 7 ? result : inputNumber * 2;
    }

    else return "Sorry!!! Invalid user input. Please only number is allowed"
}


function findingBadData(inputArray) {

    /*
    Takes an array of numbers as input 
    If the array element contains anything negative number, it will be counted as bad data.
    Counts the number of bad data.
    The user input must be an array
    Otherwise an error message will be returned
    */
    if (Array.isArray(inputArray)) {
        const badData = [];
        for(number of inputArray) {
            if(number < 0) 
            badData.push(number)
        }

        return badData.length;
    }

    else return "Please enter a data of array type!!!"

}


function gemsToDiamond (gemsNumber1, gemsNumber2, gemsNumber3) {
    /*
    Takes atleast three gems number as input otherwise error message will be returned
    Calculates the total diamonds from the gem
    Returns the total value if less than 2000, else substracts the total diamonds from 2000 and then 
    returns the result.
    */
    if(arguments.length >= 3) {
        if( typeof gemsNumber1 === "number" && typeof gemsNumber2 === "number" && typeof gemsNumber3 === "number" && !isNaN(gemsNumber1) && !isNaN(gemsNumber2)  && !isNaN(gemsNumber3)) {
           let totalDiamonds = gemsNumber1 * 21 + gemsNumber2 * 32 + gemsNumber3 * 43;
           return totalDiamonds > 1000 * 2 ? totalDiamonds - 2000 : totalDiamonds;
        }
        else return "Sorry dear!!! Enter  only numbers or I won't give you any result"
    }
   

    else return "Sorry dear!!!You must enter atleast three numbers to get results";
}



// let obj = {
//     1: "Java",
//     2:"Python",
//     3: "Javascript",
//     length:3
// }

// for(let value of obj) {
//     console.log(value)
// }

// function demo(){
//     console.dir(arguments)
//     for(let i of arguments) {
//         console.log(i)
//     }
// }

// demo(1,3,5);

//HTMLCOLLECTION VS NODELIST
// Array like object (both)
//HTMLCollection items can be accessed by their name, id, or index number. Nodelist can be accessed by only index
// for loop for both. for of loop only for nodelist
//Livelist htmlcollection nodelist is static


// let lists = document.querySelectorAll(".lists")
// console.log(lists);


// let listss = document.getElementsByClassName("lists");
// console.log(listss);

// let list1 = document.createElement("li");
// list1.innerText = "New list item";
// list1.classList.add("lists");

// let parent1 = document.getElementById("parent");
// parent1.appendChild(list1)

// console.log(listss);
// console.log(lists);
// let list2 = document.createElement("li");
// list2.innerText = "New list item";
// list2.classList.add("lists");
// parent1.appendChild(list1)
// console.log(parent1);
// console.log(list1)


// parent1.appendChild(list1)



