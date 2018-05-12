// Write a function that takes in a string for you first name, a string for your surname and returns the, with the introduction below.
function introduction(firstName, lastName){
    const introduction = 'Hi, my name is '.concat(firstName, ' ',lastName, '.');

    return introduction;

}

console.log(introduction('David', 'Embleton'));