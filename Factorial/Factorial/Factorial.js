// Write a function that takes in a number and returns the factorial.
//Method 1
function factorializeNumber(num){
    let product = 1;

    for ( let i = 1; i <= num; i++) {
        product *= i;
    }

    return product;

}
console.log(factorializeNumber(5));
console.log(factorializeNumber(4));
console.log(factorializeNumber(1));
console.log(factorializeNumber(0));
console.log(factorializeNumber(10));

//Method 2

/*Notice at the first line we have the terminal condition, i.e a condition to check the end of the recursion.
If num == 0, then we return 1, i.e. effectively ending the recursion and informing the stack to propagate this value to the upper levels.
If we do not have this condition, the recursion would go on until the stack space gets consumed, thereby resulting in a Stack Overflow*/

function factorialize(num) {
    if (num === 0){
      return 1;
    } else {
    return num*factorialize(num-1);
  }
  }
  factorialize(5);

console.log(factorialize(5));
console.log(factorialize(4));
console.log(factorialize(1));
console.log(factorialize(0));
console.log(factorialize(10));