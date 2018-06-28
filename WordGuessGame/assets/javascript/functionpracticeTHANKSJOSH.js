document.getElementById("secondButton").onclick = function (event) {
    console.log("secondButton test");
    
    //Resets the number of lives and letter storage arrays when the button is clicked again.
    let lives = 8;
    aliensStorage = [];
    document.getElementById("guess").innerHTML = (aliensStorage);

    moviesList[1].lettercount = 8;
    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
    
   
    //"resets" the appearance of the counters and displays the word's hint
    document.getElementById("guessesLeft").innerHTML = (lives);
    document.getElementById("hint").innerHTML = ("A somewhat accurate depiction of Air Travel.");
   
    //"resets" every letter block
    document.getElementById("firstLetter").innerHTML = ("");
    document.getElementById("secondLetter").innerHTML = ("");
    document.getElementById("thirdLetter").innerHTML = ("");
    document.getElementById("fourthLetter").innerHTML = ("");
    document.getElementById("fifthLetter").innerHTML = ("");
    document.getElementById("sixthLetter").innerHTML = ("");
    document.getElementById("seventhLetter").innerHTML = ("");
    document.getElementById("eighthLetter").innerHTML = ("");
    document.getElementById("ninthLetter").innerHTML = ("");
    document.getElementById("tenthLetter").innerHTML = ("");
    document.getElementById("eleventhLetter").innerHTML = ("");
    document.getElementById("twelfthLetter").innerHTML = ("");

    
    //begin code to check key presses and start matching word's countdown
    document.onkeypress = function (event) {
        document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);

            
        
        
            //variables to make the check letter function work
            var userLetters = event.key;
            userText.textContent = userLetters;

            //spotchecking
            console.log(userLetters);
            console.log(aliensStorage);

            //function for checking users keystrokes against the object.arrays above
            function checkLetters (letter) {
            return letter === userLetters.toLowerCase();
            }




        //sets the conditions for running this code as long as number of lives is greater than 0)
        if      (
                    (lives > 0) //checks to make sure user isn't out of lives
                    && 
                    (moviesList[1].lettercount > 0) // once the count reaches 0 the player has won
                    && 
                    (moviesList[1].letters.some(checkLetters) == true) // primary function to ensure letter is "correct"
                    &&
                    (aliensStorage.some(checkLetters) === false) //make sure letter hasn't been used before
                ) 
            {
            
            //code to push the letters to storage array
            aliensStorage.push(userLetters);

            //code to push the letter to the display
            var node = document.createElement("p");                 // Create a <li> node
            var textnode = document.createTextNode(aliensStorage);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("guess").appendChild(node);

            //Begins displaying the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);;



            

            //checks the letters against the users input and displays them in the proper boxes
            switch (userLetters.toLowerCase()) {
                case "a":
                    moviesList[1].lettercount-=2;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "NICE ONE!";


                    document.getElementById("firstLetter").innerHTML = "A";
                    document.getElementById("firstLetter").style.fontSize = "30px";

                 
                    document.getElementById("sixthLetter").innerHTML = "A";
                    document.getElementById("sixthLetter").style.fontSize = "30px";



                    console.log("LETTER MATCH");


                    break;

                case "i":
                    confirmLetter("i");
                    break;

                case "r":
                    moviesList[1].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "GOOD JOB!";


                    document.getElementById("thirdLetter").innerHTML = "R";
                    document.getElementById("thirdLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");

                    break;

                case "p":
                    moviesList[1].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "NAILED IT!";

                    document.getElementById("fourthLetter").innerHTML = "P";
                    document.getElementById("fourthLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");

                    break;

                    case "l":
                    moviesList[1].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "NOICE!";

                    document.getElementById("fifthLetter").innerHTML = "L";
                    document.getElementById("fifthLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");

                    break;

                    case "n":
                    moviesList[1].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "A1!";

                    document.getElementById("seventhLetter").innerHTML = "N";
                    document.getElementById("seventhLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");

                    break;

                    case "e":
                    moviesList[1].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "Steak Sauce!";

                    document.getElementById("eighthLetter").innerHTML = "E";
                    document.getElementById("eighthLetter").style.fontSize = "30px";


                    console.log("LETTER MATCH");

                    break;

                default:
                    
                    document.getElementById("hint").innerHTML = "NOT SURE WHAT JUST HAPPENED. TRY AGAIN.";


                    console.log("NOT SURE WHAT JUST HAPPENED. TRY AGAIN!");

            }

            //updates the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);


        }

        else if (
            (lives > 0) //checks to make sure user isn't out of lives
                    && 
            (moviesList[1].lettercount > 0) // once the count reaches 0 the player has won
        ) {
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            aliensStorage.push(userLetters); // pushes any OTHER LETTERS TO STORAGE
            document.getElementById("hint").innerHTML = ("YOU ALREADY CHOSE THAT LETTER. TRY AGAIN"); 
            document.getElementById("guess").innerHTML = (aliensStorage);

        }

        else if (lives <= 0) {
            document.getElementById("guess").innerHTML = (aliensStorage);
            document.getElementById("hint").innerHTML = ("You Lose!");
            event.stopPropagation();

        }

        else if ((moviesList[1].lettercount === 0)) { // stops the game and increases the wins counter
            wins++;
            document.getElementById("guess").innerHTML = (aliensStorage);
            document.getElementById("hint").innerHTML = ("You Win!");
            console.log("Win Counter test");
            console.log(wins);
            document.getElementById("winsCounter").innerhtml = wins;
            document.getElementById("guess").innerHTML = (aliensStorage);
            


        }

        else if (aliensStorage.some(checkLetters) == true) { //notes if someone pressed the key already
            console.log("REPEAT GUESS");
            console.log(aliensStorage);
            document.getElementById("hint").innerHTML = ("YOU ALREADY CHOSE THAT LETTER. TRY AGAIN"); 
            document.getElementById("guess").innerHTML = (aliensStorage);

        }

        else { //code to note a bad key press
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("hint").innerHTML = "GAME OVER?? TEST";
            console.log("BAD LETTER");                       
            event.stopPropagation();

        }


    }
    
document.getElementById("winsCounter").innerHTML = (wins);
}

function confirmLetter(letter) {
    moviesList[1].lettercount--;
    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
    document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";
    document.getElementById("secondLetter").innerHTML = letter;
    document.getElementById("secondLetter").style.fontSize = "30px";
    console.log("LETTER MATCH");
}
