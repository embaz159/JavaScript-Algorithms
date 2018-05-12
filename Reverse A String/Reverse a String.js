// Write a function that takes in a string and reverses it's value.

//Method 1 Basic method
function reverseString1(word){
    let reversedWord = word.split('');
    console.log(reversedWord);
    reversedWord = reversedWord.reverse();
    reversedWord = reversedWord.join('')
    return reversedWord;
}

console.log(reverseString1('laravel'));
console.log(reverseString1('javascript'));
console.log(reverseString2('algorithm'));

//Method 2: More efficient method

function reverseString2(word){
    let reversedWord = word.split('').reverse().join(''); 
    
    return reversedWord;
}

console.log(reverseString2('laravel'));
console.log(reverseString2('javascript'));
console.log(reverseString2('algorithm'));

//Method 3 Definitive method with only 1 iteration

function reverseString3(word){
    let reversedWord = '';

    for(let i = word.length - 1; i >= 0 ; i--) {
        reversedWord += word[i]
    }

    return reversedWord;
}
    console.log(reverseString3('laravel'));
    console.log(reverseString3('javascript'));
    console.log(reverseString2('algorithm'));