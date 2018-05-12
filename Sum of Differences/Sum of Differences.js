// Write a function that takes a number array with two positive numbers and finds the sum of all
// the numbers between and including the largest value and the smallest value.

function sumAll(numArray) {
    const min = Math.min(...numArray);
    const max = Math.max(...numArray);
    let sum = 0;

    for (let i = min; i <= max; i++) {
        sum += i;
    }
        

    return sum;
}

console.log(sumAll([10, 5]));
console.log(sumAll([3, 7]));