/* Write a function that takes in an array of numbers and 
finds what number is missing between at 0 and largest value in an array.*/

// Method

function missingNumber2(numArr) {
    const numberArray = numArr.sort((num1, num2) => {
        return num1 - num2;
    });

    for ( let i = 0; i < numberArray.length; i++) {
        if (i !== numberArray[i]) {
            return i;
        }        
    }

}

console.log(missingNumber2([0, 3, 5, 8, 4, 6, 1, 9, 7]));
console.log(missingNumber2([1, 2, 5, 0, 6, 7, 9, 3, 4]));
