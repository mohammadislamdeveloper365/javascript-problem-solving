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

//3. Write a javascript program to find square root?
function findSquareRoot(input) {
    let result = Math.sqrt(input);
    return result;
}


//4. Write a javascript program to calculate area of a triangle?

function findTriangleArea(base,height) {
    return 0.5 * base * height;
}
 

//5. Write a javascript program to swap to variables

function swapVariables(firstNumber,secondNumber){
    [secondNumber,firstNumber] = [firstNumber,secondNumber];
    return [firstNumber,secondNumber];
}


//6. Write a javascript program to convert Kilogram into miles?

function kilogramToMiles(input){
    return 0.621*input;
}

//7. Write a javascript program to convert Celcius to Farenhite?

function celciusToFarenhite(input) {
    let result = ((9/5)*input)+ 32;
    return result;
}

//8. Write a javascript program to generate a random number between 0 to 100?

function generateRandomNumber() {
    return Math.floor(Math.random()*101);
}

//9. Write a javascript program to generate a random number between a range?

function randomNumberGenerator(max,min){
    return Math.floor(Math.random() * (max - min) ) + min;
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

