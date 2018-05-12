// Write a function that takes in two arrays and returns an array of the unique values.

// Method 1
function uniqueValues(arr1, arr2) {
    let uniqueArray = [];
    
    for(let val of arr1) {
        if(arr2.includes(val) === false && uniqueArray.includes(val) === false) {
            uniqueArray.push(val);
        }
    }

    for(let val of arr2) {
        if(arr1.includes(val) === false && uniqueArray.includes(val) === false) {
            uniqueArray.push(val);
        }
    }

    return uniqueArray
}
console.log(uniqueValues([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(uniqueValues([1, "calf", 3, "piglet"], [7, "filly"]));
console.log(uniqueValues([2, 1, 3], [3, 2, 1]));

// Method 2

function uniqueValues2(arr1, arr2) {
    let uniqueArray = [];
    
    for(let val of arr1) {
        if(!arr2.includes(val) && !uniqueArray.includes(val)) {
            uniqueArray.push(val);
        }
    }

    for(let val of arr2) {
        if(!arr1.includes(val) && !uniqueArray.includes(val)) {
            uniqueArray.push(val);
        }
    }

    return uniqueArray
}
console.log(uniqueValues2([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(uniqueValues2([1, "calf", 3, "piglet"], [7, "filly"]));
console.log(uniqueValues2([2, 1, 3], [3, 2, 1]));

