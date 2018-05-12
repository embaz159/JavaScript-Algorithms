// Write a function that takes a string and parses out all the numbers and adds them together.

function sumUpNumbers(str) {
    const nums = str.match(/\d+/g) || [];
    let sum = 0;
    
    nums.forEach((num) => {
        sum += Number(num);
    });

    return sum;
    
}

console.log(sumUpNumbers('2 apples, 12 oranges'));
console.log(sumUpNumbers('123450'));
console.log(sumUpNumbers('Your payment method is invalid'));