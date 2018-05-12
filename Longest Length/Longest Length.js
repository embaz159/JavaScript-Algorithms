// Write a function that takes in a string and returns the length of the longest string

//Method 1
function longestWordLength1(str){
    let longestLength = 0;
    let strArray = str.split(' ');

    for(let i = 0 ; i < strArray.length; i++) {
        if(longestLength < strArray[i].length) {
            longestLength = strArray[i].length;
        }
        
    }

    return longestLength;
}

    console.log(longestWordLength1('I am a coding god'));
    console.log(longestWordLength1('I would like to work for Google'));
    console.log(longestWordLength1("These violent delights have violent ends"));

    //Method 2
    function longestWordLength2(str){
        let longestLength = 0;
        let strArray = str.split(' ');
    //Cleaner code by eliminating the if statement.
        for(let i = 0 ; i < strArray.length; i++) {
            longestLength = longestLength < strArray[i].length ? strArray[i].length : longestLength;
            }
            
        
    
        return longestLength;
    }   
    
    console.log(longestWordLength2('I am a coding god'));
    console.log(longestWordLength2('I would like to work for Google'));
    console.log(longestWordLength2("These violent delights have violent ends"));

        //Method 3
        function longestWordLength3(str){
            let longestLength = 0;
            let strArray = str.split(' ');
        
            strArray.forEach((word) => {            
                //Cleaner code by eliminating the if statement and for loop.
                longestLength = longestLength < word.length ? word.length : longestLength;
                
            });
        
            return longestLength;
        }
        
            console.log(longestWordLength3('I am a coding god'));
            console.log(longestWordLength3('I would like to work for Google'));
            console.log(longestWordLength3("These violent delights have violent ends"));

            //Method 4
            //Using sort function

            function longestWordLength4(str){
                let longestLength =0;
                let strArray = str.split(" ");

                strArray = strArray.sort((word1, word2) => {
                    return word2.length - word1.length;


                });

                return strArray[0].length;

            }

            console.log(longestWordLength4('I am a coding god'));
            console.log(longestWordLength4('I would like to work for Google'));
            console.log(longestWordLength4("These violent delights have violent ends"));

            //Method 5
            //Using sort function abbreviated method

            function longestWordLength4(str){
                let longestLength =0;
                let strArray = str.split(" ").sort((word1, word2) => {
                    return word2.length - word1.length;
                });

                return strArray[0].length;

            }

            console.log(longestWordLength4('I am a coding god'));
            console.log(longestWordLength4('I would like to work for Google'));
            console.log(longestWordLength4("These violent delights have violent ends"));

            
            
            //Method 6
            //Using sort function definitive method

            function longestWordLength4(str){
                let longestLength = str.split(" ").sort((word1, word2) => {
                    return word2.length - word1.length;
                })[0].length;

                return longestLength;

            }

            console.log(longestWordLength4('I am a coding god'));
            console.log(longestWordLength4('I would like to work for Google'));
            console.log(longestWordLength4("These violent delights have violent ends"));
