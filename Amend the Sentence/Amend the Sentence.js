/* Write a function that takes in a string that has no spaces, but new words are denoted with capital letters
and return a lowercase spaced out string.*/

// Method 1
function ammendTheSentence(str) {
    let stringArray = str.split("");

    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i] !== stringArray[i].toLowerCase());
        stringArray[i] = stringArray[i].toLowerCase();
        stringArray.splice(i, 0, " ");
    }

    stringArray = stringArray.join("").trim("");

    return stringArray;
} 
console.log(ammendTheSentence('CodingIsAwesome'));
console.log(ammendTheSentence("ILoveToPracticeAlgorithms"));


//Method 2 found on stack overflow not my code but much better.
function ammendTheSentence(str) 

var str = "CodingIsAwesome";
var res = str.match(/[A-Z][^A-Z]*/g).map(word => word.toLowerCase()).join(" ");
console.log(ammendTheSentence("CodingIsAwesome"));
