/********************************TO DO LIST **************************************** */

//**************RESET BUTTON********************
/*
document.getElementById("resetButton").onclick = function (event) {
    document.getElementById("guessesLeft").innerHTML = (lives);
    document.getElementById("winsCounter").innerHTML = (wins);
    document.getElementById("letterCountdown").innerHTML = 0;
    document.getElementById("firstLetter").innerHTML = " ";
    document.getElementById("secondLetter").innerHTML = " ";
    document.getElementById("thirdLetter").innerHTML = " ";
    document.getElementById("fourthLetter").innerHTML = " ";
    document.getElementById("fifthLetter").innerHTML = " ";
    document.getElementById("sixthLetter").innerHTML = " ";
    document.getElementById("seventhLetter").innerHTML = " ";
    document.getElementById("eighthLetter").innerHTML = " ";
    document.getElementById("ninthLetter").innerHTML = " ";
    document.getElementById("tenthLetter").innerHTML = " ";
    document.getElementById("eleventhLetter").innerHTML = " ";
    document.getElementById("twelfthLetter").innerHTML = " ";
    document.getElementById("answer").innerHTML = "Answer:";
    document.getElementById("hint").innerHTML = "Click one the buttons above to Play!"
    console.log("Reset Button working");

}
*/

// Code to compare every letter in the arrays of letters for the correct entry
// also
// Connect the user to the presentation by being able to type letters:


// Code to make the letters or "guesses" appear in  row


//Code to make letters appear when compared with the "answer"



//Code to count the number of guesses left


//Code to restart the game if player wins or loses

/*****************************************************************************
 * Notes for later - I can use the following code example to create new Divs that display data about my movies above in the columns.
 * **************************************************************************************************************

    // Array holds all of the drinks available
    var drinkList = [
      "Coffee: $5",
      "Espresso: $7",
      "Cappuccino: $6",
      "Latte: $4",
      "Tea: $3",
      "Ice Coffee: $6",
      "Ice Espresso: $8",
      "Ice Latte: $6",
      "Ice Tea: $4"
    ];

    // 1. Create code that "grabs" the div with the matching id (#drink-options);
    // ... 

    var targetDiv = document.getElementById("drink-options");
    targetDiv.textContent = text;
    // ...


    // 2. Create a for loop that creates HTML content of all the drinks using JavaScript.
    // HINT: You will need to use each of the following methods: createElement, textContent, appendChild
    // ...

    var text = "Here are drinks we offer: ";
    var i;
    for (i = 0; i < drinkList.length; i++) {
      text += drinkList[i] + "        ";
    }

    
    var newDiv = document.createElement("div");
    newDiv.textContent = (text);
    targetDiv.appendChild(newDiv);

    **********************************************************/


//**************Alphabet checker "if" method****************




/*

document.onkeypress = function (event) {

    var test = ["a","r","r","i","v","a","l"];
    var alphabet = event.key;
    console.log(alphabet);

    function checkLetters (letter) {
        
        return letter === alphabet.toLowerCase();
    }

    if (test.some(checkLetters) == true) {
            
        //console.log(test[i]);
        console.log("GOOD LETTER");


    } 
    else {
            
        console.log("BAD LETTER");
    }
}


*/

/************************************************* */
/************************************************* */
/*****************NOTES******************************** */
/************************************************* */
/************************************************* */
/*
document.onkeypress = function (event) {

    //local variable and function to kickstart the letter checker
    var test = ["a","r","r","i","v","a","l"];
    var alphabet = event.key;
    console.log(alphabet);


    function checkLetters (letter) {
        
        return letter === alphabet.toLowerCase();
    }
       
   // }
    //for (i = 0; i < moviesList[4].letters.length; i++) {}
   //  {
   // if (test.some(checkLetters)= true ) {
    
       //var arrayElement = (test[i]);
       //if (arrayElement === alphabet.toLowerCase()) {
        if (test.some(checkLetters) == true) {
            
            //console.log(test[i]);
            console.log("GOOD LETTER");


        } 

        
        
        else {
            
            console.log("BAD LETTER");
        }
    }
      //  if (condition) {
         //   block of code to be executed if the condition is true
       // } else { 
       //     block of code to be executed if the condition is false
       // }


/*


 
/* for(var i in myArray) {
    var arrayElement = myArray[i];
    if (arrayElement == formInput) {
         //Do your stuff
    }
} */






/*
var array = [1, 2, 3, 4, 5];

var even = function(element) {
// checks whether an element is even
return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true
*/


            //****************************Letter Check / Logs the previous letters***************** */
            
            //function checkLetters (letter) {
                    //return letter === userLetters.toLowerCase();
            //}
                          
                //if (moviesList[4].letters.some(checkLetters) == true) {
                        
                   // console.log("GOOD LETTER");
            
            
                //} 
                //else {
                    
                    //console.log("BAD LETTER");
                    //event.stopPropagation();
               // }