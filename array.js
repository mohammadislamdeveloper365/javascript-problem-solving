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

//3. Write a javascript function that removes first nth elements of an array?

function removeFirstElementsArray(arr,input) {
    return arr.slice(input)
}


//4. Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

function removeLastElementsArray(arr,input) {
    return arr.slice(-input)
}

//5.Write a function that takes an array(a) as argument. Extract the first 3 elements of a;

function extractFirstArrayElements(arr,numberOfElements){
    return arr.slice(0,numberOfElements)
}

/*6. Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. 
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

