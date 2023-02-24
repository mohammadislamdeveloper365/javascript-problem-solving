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
        return inputString.split(" ")
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
15. Write a JavaScript program to check whether a string "Script" 
presents at 5th (index 4) position in a given string, if "Script" presents 
in the string return the string without "Script" otherwise return the original one.
*/

function isWordPresent(input,word, position) {
    if(isString(input) && isString(word) && checkNumber(position)) {
        let newString = (input.slice(0,position-1) + input.slice((position + word.length-1)))
        return input.indexOf(word) === position - 1 ? newString : input;
    }

    else return invalidInputMessage();
}

/*
16. Write a program to check whether a specified character 
exists within the 2nd to 4th position in a given string.
*/

let isCharInRange = (char, input, minRange, maxRange) => {
    if(isString(char) && isString(input) && checkNumber(minRange) && checkNumber(maxRange)) {
        input = input.toLowerCase();
        char = char.toLowerCase();
        let position = input.indexOf(char) + 1;
        return position >= minRange && position <= maxRange;
    }

    else return invalidStringInputMessage();
}

//17. Write a function that takes a string and two positions and returns a string between given positions?

function getSlicedString(text, position1, position2) {
    return text.slice(position1-1, (position1-1+(position2-position1 + 1)))
}

/*
18. Write a function that takes a text and string as input. If that text contains that string, 
it returns a value which adds that string at the beginning else if returns a value which adds that string
at the end.
*/

function addString(text,str){
    return text.includes(str) ? str.concat(text) : text.concat(str);
}

/*
19.  Write a JavaScript program to create new string with first input number of characters are in 
lower case from a given string. 
If the string length is less than input number convert all the characters in upper case.
*/

function upperLowerString(inputNumber, inputString) {
    if(checkNumber(inputNumber) && isString(inputString)) {
        let newString = inputString.slice(0,3);
        return inputString.length >= inputNumber ? (newString.toLowerCase()  + inputString.slice(3)) : (newString.toUpperCase() + inputString.slice(3)) ;
    }
    else return invalidInputMessage();
}

/*
20.  Write a JavaScript function to count the occurrence of a substring in a string. 
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
*/

function numOfOccurences(string, subString) {
    if(isString(string) && isString(subString)) {
        string = string.toLowerCase();
        subString = subString.toLowerCase();
        let newArray = [];
        let array = string.split(" ");
        for(let item of array) {
            if(item === subString)
            newArray.push(subString);
        }
        console.log(newArray)
        return newArray.length;
    }

    else invalidStringInputMessage();
}

//21. Write a javascript program to reverse a string by letter?

function reverseString(input) {
    if(isString(input)) {
        let reversedString = "";
        for(let i=input.length-1; i>=0; i--) {
            reversedString = reversedString.concat(input[i]);
        }
        return reversedString;
    }

    else return invalidStringInputMessage();
}


//22. Write a function to reverse a string by word?

function reverseStringWord(input) {
    if(isString(input)) {
        let reversedStringArray = [];
        let inputArray = input.split(" ");
        for(let i=inputArray.length; i>=0; i--) {
            reversedStringArray.push([inputArray[i]]);
            console.log(reversedStringArray)
        }
        return reversedStringArray.join(" ");
    }

    else return invalidStringInputMessage();
}

/*
23. Write a JavaScript program to replace every character in a given string 
with the character following it in the alphabet.
*/

function replaceStringWithNextCharacter(input){
    if(isString(input)) {
            let resultString = "";
            for(let i=0; i<=input.length; i++) {
                switch(input[i]) {
                    
                    case 'z':
                    resultString = resultString.concat('a');
                    break;
                    
                    case 'Z':
                    resultString = resultString.concat('A');
                    break;

                    case ' ':
                    break;

                    default:
                    resultString = resultString.concat(String.fromCharCode(1 + input.charCodeAt(i)));

                }
            }
       
            return resultString;
        
    }

    else return invalidStringInputMessage();
}

/*
24. Write a JavaScript program to capitalize the first letter of each word of a given string.
*/

function capitalizeString(input) {
    if(isString(input)){
        let inputArray = input.split(" ");
        let capitalizeArray = [];
        for(let i of inputArray) {
            capitalizeArray.push(i[0].toUpperCase() + i.slice(1));
        }

        return capitalizeArray.join(" ")
    }

    else return invalidStringInputMessage();
}

