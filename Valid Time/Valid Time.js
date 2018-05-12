// Write a function that takes in a string and finds out if it is a valid time or not.

// Method 1
function isValidtime(time) {
    let timeArray = time.split(':');

    if (Number(timeArray[0]) > 23) {
        return false;
    } else if (Number(timeArray[1]) > 59) {
        return false;
    }
    
    return true;
}



console.log(isValidtime('24:00'));
console.log(isValidtime('23:31'));
console.log(isValidtime('22:00'));
console.log(isValidtime('22:61'));


