// Write a function that takes in a string, that ignores special characters and underscores, 
//is case insensitive, ignores spaces and checks for palindromes.

//Method 1

function isPalindrome(str) {
    let forwardStr = str.toLowerCase();
    let reversedStr;
    

    forwardStr = forwardStr.replace(/[\W_]/g, '');
    reversedStr = forwardStr.split('').reverse().join('');

    return forwardStr === reversedStr;
}




console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("My age is 0, 0 si ega ym"));
console.log(isPalindrome("_codegod"));
console.log(isPalindrome("legendary"));
console.log(isPalindrome(".0_0 (: /-\ :) 0-0"));

//Method 2

function isPalindrome2(str) {
    let forwardStr = str.toLowerCase().replace(/[\W_]/g, '');
    let reversedStr = forwardStr.split('').reverse().join('');    
      

    return forwardStr === reversedStr;
}

console.log(isPalindrome2("A man, a plan, a canal. Panama"));
console.log(isPalindrome2("My age is 0, 0 si ega ym"));
console.log(isPalindrome2("_codegod"));
console.log(isPalindrome2("legendary"));
console.log(isPalindrome2(".0_0 (: /-\ :) 0-0"));