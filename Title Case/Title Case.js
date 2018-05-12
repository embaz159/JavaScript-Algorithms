// Write a function that takes in a string and capitalizes the first letter of each word.

function titleCase(str) {
    let titleCaseSentenced = str.split(' ');

    titleCaseSentenced = titleCaseSentenced.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        
        word = firstLetter.concat(word.slice(1, word.length));
        
        return word;
    });
  
    titleCaseSentenced = titleCaseSentenced.join(' ');
  
    return titleCaseSentenced;
}
  
  console.log(titleCase("I am a coding god"));
  console.log(titleCase("I would like to work for Google"));