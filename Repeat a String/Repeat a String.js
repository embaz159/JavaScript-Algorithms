// Write a function that takes in a string and number that repeats the string that number of times.

// Method 1

function repeatedString1(str, num) {
    let repeatedString1 = ' ';

    while ( num > 0) {
        repeatedString1 = repeatedString1.concat(str);
        num--;
    }

    return repeatedString1;
}
console.log(repeatedString1('boohoo', 2));
console.log(repeatedString1('google', 3));


//Method 2

function repeatedString1(str, num) {
    let repeatedString1 = ' ';

    while ( num > 0) {
        repeatedString1 += str
        num--;
    }
    return repeatedString1;
}
console.log(repeatedString1('boohoo', 2));
console.log(repeatedString1('google', 3));

//Method 3 Definitive method.

function repeatedString1(str, num) {
    return str.repeat(num);
}
console.log(repeatedString1('boohoo', 2));
console.log(repeatedString1('google', 3));