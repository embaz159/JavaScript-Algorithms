// Write a function that takes in a string and reverses it's value.
//Method 1 Original method
function reverseString1(word){
    let reversedWord = word.split('');
    console.log(reversedWord);
    reversedWord = reversedWord.reverse();
    reversedWord = reversedWord.join('')
    return reversedWord;
}

console.log(reverseString1('codegod'));
console.log(reverseString1('javascript'));

//Method 2: Instead of using  reverse a string1's method this is a more efficient line of code

function reverseString2(word){
    let reversedWord = word.split('').reverse().join(''); // Instead of using  reverse a string1's method this is a more efficient line of code
    
    return reversedWord;
}

console.log(reverseString2('codegod'));
console.log(reverseString2('javascript'));

//Method 3 Cleaner code with only 1 iteration

function reverseString3(word){
    let reversedWord = '';

    for(let i = word.length - 1; i >= 0 ; i--) {
        reversedWord += word[i]
    }

    return reversedWord;
}

    console.log(reverseString3('codegod'));
    console.log(reverseString3('javascript'));