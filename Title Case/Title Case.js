//Write a function that takes in a string and capitalizes the first letter of each word.

//Method 1
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

console.log(toTitleCase('These Violent Delights Have Violent Ends'));
console.log(toTitleCase('A lion doesnt concern himself with the opinions of a sheep'));

//Method 2
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

console.log(titleCase('These Violent Delights Have Violent Ends'));
console.log(titleCase('A lion doesnt concern himself with the opinions of a sheep'));