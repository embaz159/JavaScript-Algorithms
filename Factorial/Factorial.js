// Write a function that takes in a number and returns the factorial.
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

