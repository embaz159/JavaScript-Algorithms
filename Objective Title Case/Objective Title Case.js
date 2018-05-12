//Write a function that takes in a string and capitalizes the first letter of each word.

//Method 1 from google
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(toTitleCase('I am a coding god'));
console.log(toTitleCase('I would like to work for google'));

//Method 2 from course
function titleCase(str) {
    let titleCasedSentenced = str.split(' ');

    titleCasedSentenced = titleCasedSentenced.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();

        word =  firstLetter.concat(word.slice(1, word.length));

        return word
    
    });

    titleCasedSentenced = titleCasedSentenced.join(' ');

    return titleCasedSentenced;
}

console.log(titleCase('I am a coding god'));
console.log(titleCase('I would like to work for google'));