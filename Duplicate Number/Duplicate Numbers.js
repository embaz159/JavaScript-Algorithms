// Write a function that takes in an array of numbers and finds out if there are any duplicate numbers within the array.
// Method 1

function isDuplicated(numArray) {
    const sortedNumsArray = numArray.sort((num1, num2) => {
        return num1 - num2;
    });

    for (let i=0; i < sortedNumsArray.length; i++) {
        if(sortedNumsArray[i] === sortedNumsArray[i+1]){
            return true;
        }
    
    }

    return false;
}


console.log(isDuplicated([1, 2, 3, 1]));
console.log(isDuplicated([3, 1]));
console.log(isDuplicated([0, 4, 5, 0, 3, 6]));

// Method 2
// Cleaner code in for loop
function isDuplicated2(numArray) {
    const sortedNumsArray = numArray.sort((num1, num2) => {
        return num1 - num2;
    });

    for (let i = 0; i < sortedNumsArray.length - 1; i++) {
        if(sortedNumsArray[i] === sortedNumsArray[i+1]){
            return true;
        }
    
    }

    return false;
}


console.log(isDuplicated2([1, 2, 3, 1]));
console.log(isDuplicated2([3, 1]));
console.log(isDuplicated2([0, 4, 5, 0, 3, 6]));
