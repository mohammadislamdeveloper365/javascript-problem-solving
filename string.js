/*
--------------------------
Javascript String Problems
*/

//22. Write a JavaScript function to check whether an `input` is a string or not.

function isString (inputString) {
    return typeof inputString  === 'string';
}

//23. Write a JavaScript function to check whether a string is blank or not.

function isStringBlank (inputString) {
    if(typeof inputString === 'string'){
        if(!inputString.length)
        return true;

        else return false;
    }
    
    return "Please enter string as input"
}



// 23. Write a JavaScript function to split a string and convert it into an array of words.

function convertStringToArray (inputString) {
    if(typeof inputString === 'string') {
        return inputString.split(' ')
    }

    return "Please enter a valid string as input"
}


//24. Write a JavaScript function to extract a specified number of characters from a string.
function truncateString (inputString , truncateNumber) {
    if(typeof inputString === 'string') {
        return inputString.slice(0,truncateNumber);
    }
    return "Please enter a valid string as input"
}



//25. Write a JavaScript function to convert a last word of string in abbreviated form.

function abbreviateName (inputString) {
    if(typeof inputString === 'string') {
        let result = inputString.split(" ");
        if(result.length > 1) {
            console.log(result[result.length-1])
            result[result.length-1] = result[result.length-1].slice(0,1);
            inputString = result.join(' ').concat(".");
            return inputString;
        }
        return inputString;
    }

    return "Please enter a valid string";
}

