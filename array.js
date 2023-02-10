/*
-------------------
Array Problems
-----------------
*/

//1. Write a function to check if the input is an array?

function isArray (inputArray) {
    return Array.isArray(inputArray);
}

//2. Write a function that takes an array of voter and number  as input and  and returns the array of ages which are equal or above that number?

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