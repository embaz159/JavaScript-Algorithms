// Write a function that takes in a string and returns a boolean on whether or not it is a digit. A digit is defined as a number between 0-9.
// Method 1 My method found on Mozilla

let array1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(array1.includes(1));
console.log(array1.includes(3));
console.log(array1.includes("d"));

// Method 2
function isDigit(str) {
    const digitArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return digitArray.includes(str);
}


console.log(isDigit('1'));
console.log(isDigit('3'));
console.log(isDigit('d'));
