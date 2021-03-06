/* Write a function that takes in an array of positive 
numbers and returns the first number that is duplicated. If no duplicates occur return -1;*/

function firstDuplicate(numArray) {
    let duplicateObject = {};

    for(let num of numArray){
        if(duplicateObject.hasOwnProperty(num)) {
            return num;
        }
        duplicateObject[num] = num;
    }

    return -1;
}



console.log(firstDuplicate([2, 3, 3, 1, 5, 2]));
console.log(firstDuplicate([2, 2]));
console.log(firstDuplicate([2, 1, 3]));
