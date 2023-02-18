/*
--------------------------
Javascript String Problems
*/

//1. Write a JavaScript function to check whether an `input` is a string or not.

function isString (inputString) {
    return typeof inputString  === 'string';
}

//2. Write a JavaScript function to check whether a string is blank or not.

function isStringBlank (inputString) {
    if(typeof inputString === 'string'){
        if(!inputString.length)
        return true;

        else return false;
    }
    
    return "Please enter string as input"
}



// 3. Write a JavaScript function to split a string and convert it into an array of words.

function convertStringToArray (inputString) {
    if(typeof inputString === 'string') {
        return inputString.split(' ')
    }

    return "Please enter a valid string as input"
}


//4. Write a JavaScript function to extract a specified number of characters from a string.
function truncateString (inputString , truncateNumber) {
    if(typeof inputString === 'string') {
        return inputString.slice(0,truncateNumber);
    }
    return "Please enter a valid string as input"
}



//5. Write a JavaScript function to convert a last word of string in abbreviated form.

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

//6. Write a JavaScript function to hide email addresses to protect from unauthorized user?

function hideUserEmail (email) {
    if(typeof email === 'string') {
        let arrEmail = email.split('@');
        let hiddenEmail = arrEmail[0];
        if(!!hiddenEmail.length && hiddenEmail.length > 1) {
            console.log(hiddenEmail)
            console.log(hiddenEmail.length)
            hiddenEmail = hiddenEmail.slice(0,hiddenEmail.length/2);
            return hiddenEmail.concat('...','@',arrEmail[1]);
        }

        return ''.concat('...','@',arrEmail[1])

    }

    return 'Please enter a valid string'
}


/*
7. Write a function to parameterize a string? 
Test Data :
input : string_parameterize("Robin Singh from USA."));
output: "robin-singh-from-usa"
*/

function parameterizeString (text) {
    if (typeof text === 'string') {
        let arrText = text.split(' ');
        console.log(arrText);
        
        if(arrText.length > 1) {
            for(let i = 0; i<arrText.length; i++) {
                if(!arrText[i]) 
                arrText.splice(i);
            }
            return arrText.join('-');
        }
        
        return arrText.toString();
        
    }

    return "Please enter a valid string"
}


/*
8.  Write a JavaScript program to create a new string adding "Py" in front of a given string. 
If the given string begins with "Py" 
then return the original string. 
Test data: 'Python' 
output = 'Python'
input : "thon"
output: 'Python'
*/

function addPyBeforeText(input) {
    if(isString(input)) {
        let positionOfPy = input.indexOf('Py');
        if(positionOfPy === 0)
        return input;

        else return "Py" + input;
    }
    else return invalidStringInputMessage();
}


/*
9. Write a JavaScript program to remove a character at the specified position 
of a given string and return the new string.
*/

function removeCharacterOfString(input,position) {
    if(isString(input)) {
        let newString = '';
        let sizeOfString = input.length;
        for(let i=0; i<sizeOfString; i++ ) {
            if(position - 1 === i) continue;

            else newString += input[i];

        }
        return newString;
    }

    else return invalidStringInputMessage();
}



/*
10.Write a JavaScript program to create a new string from a given string 
changing the position of first and last characters.
The string length must be greater than or equal to 1.
*/

function swapStringFirstLastChar(input) {
    if(isString(input) && input.length >= 1) {
        let newString = '';
        
        if(input.length === 1) 
        return input;

        else {
            newString = input.slice(1,input.length-1);
            newString = input[input.length-1] + newString + input[0] ;
            return newString;
        }
    }

    return invalidStringInputMessage();
}


/*
11.Write a JavaScript program to create a new string from a given string with the first character
 of the given string added at the front and back.
*/

function addStringFrontBack(input) {
    if(isString(input) && input.length >= 0)
    return input[0] + input + input[0];
    else return invalidStringInputMessage();
}


/*
12. Write a JavaScript program to create a new string from a given string taking the last 3 characters 
and added at both the front and back. The string length must be 3 or more.
*/

function addLastFrontBack(input,numberOfLastStrings) {
    if(isString(input) && input.length >= numberOfLastStrings) {
        if (input.length === numberOfLastStrings) 
            return input.concat(input,input);
        else {
            let newString = '';
            let slicedString = input.slice(-numberOfLastStrings);
            newString = slicedString + input + slicedString;

            return newString;
        }
    }

    else return invalidStringInputMessage();
}


//13. Write a JavaScript program to check whether a string starts with input and false otherwise?

function doesStartWithWord(input,wordToStart) {
    if(isString(input)) {
        input = input.toLowerCase();
        wordToStart = wordToStart.toLowerCase();
        let position = input.indexOf(wordToStart);
        return position === 0;
    }
    else return invalidStringInputMessage();
}

//14. Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

function startsWithWord(inputText,inputWord) {
    if(isString(inputText) && isString(inputWord)) {
        inputText = inputText.toLowerCase();
        inputWord = inputWord.toLowerCase();
        return inputText.indexOf(inputWord) === 0;
    }

    else return invalidStringInputMessage();
}


/*  
Write a JavaScript program to check whether a string "Script" 
presents at 5th (index 4) position in a given string, if "Script" presents 
in the string return the string without "Script" otherwise return the original one.
*/

function isWordPresent(input,word, position) {
    if(isString(input) && isString(word) && checkNumber(position)) {
        return input.indexOf(word) === position - 1 ? input.slice(0) : input;
    }

    else return invalidInputMessage();
}

//Not done yet