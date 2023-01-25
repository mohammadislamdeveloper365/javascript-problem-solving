//Javascript problems

//1. Write a program which takes input and prints that?
function printInput(input){
    return input;
}


//2. Write a program that takes numbers as input and returns the sum?

function addNumbers(...numbers){
    let sum = 0;
    for(let i of numbers) {
        sum += i;
    }
    return sum;
}

//Write a javascript program to find square root?
function findSquareRoot(input) {
    let result = Math.sqrt(input);
    return result;
}


//Write a javascript program to calculate area of a triangle?

function findTriangleArea(base,height) {
    return 0.5 * base * height;
}
 

// Write a javascript program to swap to variables

function swapVariables(firstNumber,secondNumber){
    [secondNumber,firstNumber] = [firstNumber,secondNumber];
    return [firstNumber,secondNumber];
}


//Write a javascript program to convert Kilogram into miles?

function kilogramToMiles(input){
    return 0.621*input;
}

//Write a javascript program to convert Celcius to Farenhite?

function celciusToFarenhite(input) {
    let result = ((9/5)*input)+ 32;
    return result;
}

//Write a javascript program to generate a random number between 0 to 100?

function generateRandomNumber() {
    return Math.floor(Math.random()*101);
}

//Write a javascript program to generate a random number between a range?

function randomNumberGenerator(max,min){
    return Math.floor(Math.random() * (max - min) ) + min;
}

//Write a javascript program to find a positive,negative or zero?

function checkNumber(input) {
    if(input > 0)
    return 1;
    else if(input < 0)
    return -1;
    else (input == 0)
    return 0;
   
}

//Write a javascript program to check if a number is even or odd?

function checkEvenNumber(input) {
    return !(input % 2)
}

