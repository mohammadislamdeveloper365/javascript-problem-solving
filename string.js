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

console.log(parameterizeString(66))