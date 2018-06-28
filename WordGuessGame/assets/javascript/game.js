
/*********************************
 * 
 * GLOBAL DECLARATIONS
 * 
 ********************************/

// Code to CREATE the movies as an array of Objects
var moviesList = [

    {//First object: movie "Arrival"
        name: "Arrival",
        date: 2016,
        starring: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
        letters: ["a", "r", "r", "i", "v", "a", "l"],
        lettercount: [7],
    },

    {//Second object: movie "Aliens"
        name: "Aliens",
        date: 1986,
        starring: ["Sigourney Weaver", "Micahel Biehn", "Paul Reiser"],
        letters: ["a", "l", "i", "e", "n", "s"],
        lettercount: [6],
    },

    {//Third object: movie "Airplane"
        name: "Airplane",
        date: 1980,
        starring: ["Robert Hays", "Julie Hagerty"],
        letters: ["a", "i", "r", "p", "l", "a", "n", "e"],
        lettercount: [7],

    },

    {//Fourth object: movie "Argo"
        name: "Argo",
        date: 2012,
        starring: ["Ben Affleck", "Bryan Cranston", "Alan Arkin"],
        letters: ["a", "r", "g", "o"],
        lettercount: [3],

    },

    {//Fifth object: movie "Avatar"
        name: "Avatar",
        date: 2009,
        starring: ["Sam Worthington", "Sigourney Weaver", "Zoe Saldana"],
        letters: ["a", "v", "a", "t", "a", "r"],
        lettercount: [6],

    },

];

//Global variables list
var wins = 0;
var lives = 8;
var userText = document.getElementById("guess");

// Storage Arrays for each word
var avatarStorage = [];
var argoStorage = [];
var airplaneStorage = [];
var aliensStorage = [];
var arrivalStorage = [];


/*********************************
 * 
 * FUNCTIONS
 * 
 ********************************/

//function I created in case I need to remove any divs that are appended
function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}



//Begins displaying the global counters
document.getElementById("guessesLeft").innerHTML = (lives);
document.getElementById("winsCounter").innerHTML = (wins);


//**************HANGMAN: "AVATAR" CODE **********************
document.getElementById("firstButton").onclick = function (event) {

    //Resets the number of lives and letter storage arrays when the button is clicked again.
    var lives = 8;
    avatarStorage = [];
    document.getElementById("guess").innerHTML = (avatarStorage);

    moviesList[4].lettercount = 6;
    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);

    document.getElementById("movieContainer").show_image =

    //"resets" the appearance of the counters and displays the word's hint
    document.getElementById("guessesLeft").innerHTML = (lives);
    document.getElementById("hint").innerHTML = ("James Cameron's greatest movie. His words.");

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
        document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);


        //variables to make the check letter function work
        var userLetters = event.key;
        userText.textContent = userLetters;

        //spotchecking
        console.log(userLetters);
        console.log(avatarStorage);

        //function for checking users keystrokes against the object.arrays above
        function checkLetters(letter) {
            return letter === userLetters.toLowerCase();
        }


        //sets the conditions for running this code as long as number of lives is greater than 0)
        if (
            (lives > 0) //checks to make sure user isn't out of lives
            &&
            (moviesList[4].lettercount > 0) // once the count reaches 0 the player has won
            &&
            (moviesList[4].letters.some(checkLetters) == true) // primary function to ensure letter is "correct"
            &&
            (avatarStorage.some(checkLetters) === false) //make sure letter hasn't been used before
        ) {

            //code to push the letters to storage array
            avatarStorage.push(userLetters);

            //code to push the letter to the display
            var node = document.createElement("p");                 // Create a <li> node
            var textnode = document.createTextNode(avatarStorage);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("guess").appendChild(node);

            //Begins displaying the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);;



            //checks the letters against the users input and displays them in the proper boxes
            switch (userLetters.toLowerCase()) {
                case "a":
                    moviesList[4].lettercount -= 3;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "NICE ONE!";
                    document.getElementById("firstLetter").innerHTML = "A";
                    document.getElementById("firstLetter").style.fontSize = "30px";
                    document.getElementById("thirdLetter").innerHTML = "A";
                    document.getElementById("thirdLetter").style.fontSize = "30px";
                    document.getElementById("fifthLetter").innerHTML = "A";
                    document.getElementById("fifthLetter").style.fontSize = "30px";

                    break;

                case "v":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";
                    document.getElementById("secondLetter").innerHTML = "V";
                    document.getElementById("secondLetter").style.fontSize = "30px";

                    break;

                case "t":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "GOOD JOB!";
                    document.getElementById("fourthLetter").innerHTML = "T";
                    document.getElementById("fourthLetter").style.fontSize = "30px";

                    break;

                case "r":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "NAILED IT!";
                    document.getElementById("sixthLetter").innerHTML = "R";
                    document.getElementById("sixthLetter").style.fontSize = "30px";

                    break;

                default:

                    document.getElementById("hint").innerHTML = "NOT SURE WHAT JUST HAPPENED. TRY AGAIN.";

            }

            //updates the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);

        }

        else if (
            (lives > 0) //checks to make sure user isn't out of lives
            &&
            (moviesList[4].lettercount > 0) // once the count reaches 0 the player has won
        ) {
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            avatarStorage.push(userLetters); // pushes any OTHER LETTERS TO STORAGE
            document.getElementById("hint").innerHTML = ("NOPE! Try again.");
            document.getElementById("guess").innerHTML = (avatarStorage);

        }

        else if (lives <= 0) {
            document.getElementById("guess").innerHTML = (avatarStorage);
            document.getElementById("hint").innerHTML = ("You Lose!");
            event.stopPropagation();

        }

        else if ((moviesList[4].lettercount === 0)) { // stops the game and increases the wins counter
            wins++;
            document.getElementById("guess").innerHTML = (avatarStorage);
            document.getElementById("hint").innerHTML = ("You Win!");
            document.getElementById("winsCounter").innerhtml = wins;
            document.getElementById("guess").innerHTML = (avatarStorage);
            document.getElementById("movieContainer").style.display = 'block'; 
           

        }

        else if (avatarStorage.some(checkLetters) == true) { //notes if someone pressed the key already

            document.getElementById("hint").innerHTML = ("NOPE! Try again.");
            document.getElementById("guess").innerHTML = (avatarStorage);

        }

        else { //code to note a bad key press
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("hint").innerHTML = "GAME OVER?? TEST";
            event.stopPropagation();

        }


    }

    document.getElementById("winsCounter").innerHTML = (wins);
}

//**************HANGMAN: "AVATAR" CODE **********************
document.getElementById("firstButton").onclick = function (event) {

    //Resets the number of lives and letter storage arrays when the button is clicked again.
    var lives = 8;
    avatarStorage = [];
    document.getElementById("guess").innerHTML = (avatarStorage);

    moviesList[4].lettercount = 6;
    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);


    //"resets" the appearance of the counters and displays the word's hint
    document.getElementById("guessesLeft").innerHTML = (lives);
    document.getElementById("hint").innerHTML = ("James Cameron's greatest movie. His words.");

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
        document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);


        //variables to make the check letter function work
        var userLetters = event.key;
        userText.textContent = userLetters;

        //spotchecking
        console.log(userLetters);
        console.log(avatarStorage);

        //function for checking users keystrokes against the object.arrays above
        function checkLetters(letter) {
            return letter === userLetters.toLowerCase();
        }


        //sets the conditions for running this code as long as number of lives is greater than 0)
        if (
            (lives > 0) //checks to make sure user isn't out of lives
            &&
            (moviesList[4].lettercount > 0) // once the count reaches 0 the player has won
            &&
            (moviesList[4].letters.some(checkLetters) == true) // primary function to ensure letter is "correct"
            &&
            (avatarStorage.some(checkLetters) === false) //make sure letter hasn't been used before
        ) {

            //code to push the letters to storage array
            avatarStorage.push(userLetters);

            //code to push the letter to the display
            var node = document.createElement("p");                 // Create a <li> node
            var textnode = document.createTextNode(avatarStorage);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("guess").appendChild(node);

            //Begins displaying the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);;


            //checks the letters against the users input and displays them in the proper boxes
            switch (userLetters.toLowerCase()) {
                case "a":
                    moviesList[4].lettercount -= 3;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "NICE ONE!";


                    document.getElementById("firstLetter").innerHTML = "A";
                    document.getElementById("firstLetter").style.fontSize = "30px";


                    document.getElementById("thirdLetter").innerHTML = "A";
                    document.getElementById("thirdLetter").style.fontSize = "30px";


                    document.getElementById("fifthLetter").innerHTML = "A";
                    document.getElementById("fifthLetter").style.fontSize = "30px";

                    break;

                case "v":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";

                    document.getElementById("secondLetter").innerHTML = "V";
                    document.getElementById("secondLetter").style.fontSize = "30px";

                    break;

                case "t":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "GOOD JOB!";


                    document.getElementById("fourthLetter").innerHTML = "T";
                    document.getElementById("fourthLetter").style.fontSize = "30px";

                    break;

                case "r":
                    moviesList[4].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);
                    document.getElementById("hint").innerHTML = "NAILED IT!";

                    document.getElementById("sixthLetter").innerHTML = "R";
                    document.getElementById("sixthLetter").style.fontSize = "30px";

                    break;

                default:

                    document.getElementById("hint").innerHTML = "NOT SURE WHAT JUST HAPPENED. TRY AGAIN.";

            }

            //updates the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[4].lettercount);


        }

        else if (
            (lives > 0) //checks to make sure user isn't out of lives
            &&
            (moviesList[4].lettercount > 0) // once the count reaches 0 the player has won
        ) {
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            avatarStorage.push(userLetters); // pushes any OTHER LETTERS TO STORAGE
            document.getElementById("hint").innerHTML = ("NOPE! Try again.");
            document.getElementById("guess").innerHTML = (avatarStorage);

        }

        else if (lives <= 0) {
            document.getElementById("guess").innerHTML = (avatarStorage);
            document.getElementById("hint").innerHTML = ("You Lose!");
            event.stopPropagation();

        }

        else if ((moviesList[4].lettercount === 0)) { // stops the game and increases the wins counter
            wins++;
            document.getElementById("guess").innerHTML = (avatarStorage);
            document.getElementById("hint").innerHTML = ("You Win!");
            document.getElementById("winsCounter").innerhtml = wins;
            document.getElementById("guess").innerHTML = (avatarStorage);
            function moviePoster() {
                var src = "http://google.com/images/logo.gif";
                show_image("http://google.com/images/logo.gif", 276,110, "Google Logo");
            }

        }

        else if (avatarStorage.some(checkLetters) == true) { //notes if someone pressed the key already
            console.log("REPEAT GUESS");
            console.log(avatarStorage);
            document.getElementById("hint").innerHTML = ("NOPE! Try again.");
            document.getElementById("guess").innerHTML = (avatarStorage);

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

//**************HANGMAN: "Argo" CODE **********************
//**************HANGMAN: "Argo" CODE **********************
//**************HANGMAN: "Argo" CODE **********************
//**************HANGMAN: "Argo" CODE **********************
//**************HANGMAN: "Argo" CODE **********************
document.getElementById("secondButton").onclick = function (event) {

    //Resets the number of lives and letter storage arrays when the button is clicked again.
    var lives = 8;
    argoStorage = [];
    document.getElementById("guess").innerHTML = (argoStorage);

    moviesList[3].lettercount = 4;
    document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);


    //"resets" the appearance of the counters and displays the word's hint
    document.getElementById("guessesLeft").innerHTML = (lives);
    document.getElementById("hint").innerHTML = ("The one where Ben Affleck is NOT in BOSTON.");

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
        document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);




        //variables to make the check letter function work
        var userLetters = event.key;
        userText.textContent = userLetters;

        //spotchecking
        console.log(userLetters);
        console.log(argoStorage);

        //function for checking users keystrokes against the object.arrays above
        function checkLetters(letter) {
            return letter === userLetters.toLowerCase();
        }

        //sets the conditions for running this code as long as number of lives is greater than 0)
        if (
            (lives > 0) //checks to make sure user isn't out of lives
            &&
            (moviesList[3].lettercount > 0) // once the count reaches 0 the player has won
            &&
            (moviesList[3].letters.some(checkLetters) == true) // primary function to ensure letter is "correct"
            &&
            (argoStorage.some(checkLetters) === false) //make sure letter hasn't been used before
        ) {

            //code to push the letters to storage array
            argoStorage.push(userLetters);

            //code to push the letter to the display
            var node = document.createElement("p");                 // Create a <li> node
            var textnode = document.createTextNode(argoStorage);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("guess").appendChild(node);

            //Begins displaying the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);;


            //checks the letters against the users input and displays them in the proper boxes
            switch (userLetters.toLowerCase()) {
                case "a":
                    moviesList[3].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);
                    document.getElementById("hint").innerHTML = "NICE ONE!";


                    document.getElementById("firstLetter").innerHTML = "A";
                    document.getElementById("firstLetter").style.fontSize = "30px";

                    break;

                case "r":
                    moviesList[3].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);
                    document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";

                    document.getElementById("secondLetter").innerHTML = "R";
                    document.getElementById("secondLetter").style.fontSize = "30px";

                    break;

                case "g":
                    moviesList[3].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);
                    document.getElementById("hint").innerHTML = "GOOD JOB!";


                    document.getElementById("thirdLetter").innerHTML = "G";
                    document.getElementById("thirdLetter").style.fontSize = "30px";

                    break;

                case "o":
                    moviesList[3].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);
                    document.getElementById("hint").innerHTML = "NAILED IT!";

                    document.getElementById("fourthLetter").innerHTML = "O";
                    document.getElementById("fourthLetter").style.fontSize = "30px";

                    break;

                default:

                    document.getElementById("hint").innerHTML = "NOT SURE WHAT JUST HAPPENED. TRY AGAIN.";


                    console.log("NOT SURE WHAT JUST HAPPENED. TRY AGAIN!");

            }

            //updates the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[3].lettercount);


        }

        else if (
            (lives > 0) //checks to make sure user isn't out of lives
            &&
            (moviesList[3].lettercount > 0) // once the count reaches 0 the player has won
        ) {
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            argoStorage.push(userLetters); // pushes any OTHER LETTERS TO STORAGE
            document.getElementById("hint").innerHTML = ("NOPE! Try again.");
            document.getElementById("guess").innerHTML = (argoStorage);

        }

        else if (lives <= 0) {
            document.getElementById("guess").innerHTML = (argoStorage);
            document.getElementById("hint").innerHTML = ("You Lose!");
            event.stopPropagation();

        }

        else if ((moviesList[3].lettercount === 0)) { // stops the game and increases the wins counter
            wins++;
            document.getElementById("guess").innerHTML = (argoStorage);
            document.getElementById("hint").innerHTML = ("You Win!");
            document.getElementById("winsCounter").innerhtml = wins;
            document.getElementById("guess").innerHTML = (argoStorage);

        }

        else if (argoStorage.some(checkLetters) == true) { //notes if someone pressed the key already
            console.log("REPEAT GUESS");
            console.log(argoStorage);
            document.getElementById("hint").innerHTML = ("NOPE! Try again.");
            document.getElementById("guess").innerHTML = (argoStorage);

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


//**************HANGMAN: "Airplane" CODE **********************
//**************HANGMAN: "Airplane" CODE **********************
//**************HANGMAN: "Airplane" CODE **********************
//**************HANGMAN: "Airplane" CODE **********************
//**************HANGMAN: "Airplane" CODE **********************
document.getElementById("thirdButton").onclick = function (event) {

    //Resets the number of lives and letter storage arrays when the button is clicked again.
    var lives = 8;
    airplaneStorage = [];
    document.getElementById("guess").innerHTML = (airplaneStorage);

    moviesList[2].lettercount = 8;
    document.getElementById("letterCountdown").innerHTML = (moviesList[2].lettercount);


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
        document.getElementById("letterCountdown").innerHTML = (moviesList[2].lettercount);


        //variables to make the check letter function work
        var userLetters = event.key;
        userText.textContent = userLetters;

        //spotchecking
        console.log(userLetters);
        console.log(airplaneStorage);

        //function for checking users keystrokes against the object.arrays above
        function checkLetters(letter) {
            return letter === userLetters.toLowerCase();
        }

        //sets the conditions for running this code as long as number of lives is greater than 0)
        if (
            (lives > 0) //checks to make sure user isn't out of lives
            &&
            (moviesList[2].lettercount > 0) // once the count reaches 0 the player has won
            &&
            (moviesList[2].letters.some(checkLetters) == true) // primary function to ensure letter is "correct"
            &&
            (airplaneStorage.some(checkLetters) === false) //make sure letter hasn't been used before
        ) {

            //code to push the letters to storage array
            airplaneStorage.push(userLetters);

            //code to push the letter to the display
            var node = document.createElement("p");                 // Create a <li> node
            var textnode = document.createTextNode(airplaneStorage);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("guess").appendChild(node);

            //Begins displaying the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[2].lettercount);;


            //checks the letters against the users input and displays them in the proper boxes
            switch (userLetters.toLowerCase()) {
                case "a":
                    moviesList[2].lettercount -= 2;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[2].lettercount);
                    document.getElementById("hint").innerHTML = "NICE ONE!";
                    document.getElementById("firstLetter").innerHTML = "A";
                    document.getElementById("firstLetter").style.fontSize = "30px";
                    document.getElementById("sixthLetter").innerHTML = "A";
                    document.getElementById("sixthLetter").style.fontSize = "30px";

                    break;

                case "i":
                    moviesList[2].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[2].lettercount);
                    document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";
                    document.getElementById("secondLetter").innerHTML = "I";
                    document.getElementById("secondLetter").style.fontSize = "30px";

                    break;

                case "r":
                    moviesList[2].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[2].lettercount);
                    document.getElementById("hint").innerHTML = "GOOD JOB!";
                    document.getElementById("thirdLetter").innerHTML = "R";
                    document.getElementById("thirdLetter").style.fontSize = "30px";

                    break;

                case "p":
                    moviesList[2].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[2].lettercount);
                    document.getElementById("hint").innerHTML = "NAILED IT!";
                    document.getElementById("fourthLetter").innerHTML = "P";
                    document.getElementById("fourthLetter").style.fontSize = "30px";

                    break;

                case "l":
                    moviesList[2].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[2].lettercount);
                    document.getElementById("hint").innerHTML = "NOICE!";
                    document.getElementById("fifthLetter").innerHTML = "L";
                    document.getElementById("fifthLetter").style.fontSize = "30px";

                    break;

                case "n":
                    moviesList[2].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[2].lettercount);
                    document.getElementById("hint").innerHTML = "A1!";
                    document.getElementById("seventhLetter").innerHTML = "N";
                    document.getElementById("seventhLetter").style.fontSize = "30px";

                    break;

                case "e":
                    moviesList[2].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[2].lettercount);
                    document.getElementById("hint").innerHTML = "Steak Sauce!";
                    document.getElementById("eighthLetter").innerHTML = "E";
                    document.getElementById("eighthLetter").style.fontSize = "30px";

                    break;

                default:

                    document.getElementById("hint").innerHTML = "NOT SURE WHAT JUST HAPPENED. TRY AGAIN.";

            }

            //updates the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[2].lettercount);

        }

        else if (
            (lives > 0) //checks to make sure user isn't out of lives
            &&
            (moviesList[2].lettercount > 0) // once the count reaches 0 the player has won
        ) {
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            airplaneStorage.push(userLetters); // pushes any OTHER LETTERS TO STORAGE
            document.getElementById("hint").innerHTML = ("NOPE! Try again.");
            document.getElementById("guess").innerHTML = (airplaneStorage);

        }

        else if (lives <= 0) {
            document.getElementById("guess").innerHTML = (airplaneStorage);
            document.getElementById("hint").innerHTML = ("You Lose!");
            event.stopPropagation();

        }

        else if ((moviesList[2].lettercount === 0)) { // stops the game and increases the wins counter
            wins++;
            document.getElementById("guess").innerHTML = (airplaneStorage);
            document.getElementById("hint").innerHTML = ("You Win!");
            document.getElementById("winsCounter").innerhtml = wins;
            document.getElementById("guess").innerHTML = (airplaneStorage);

        }

        else if (airplaneStorage.some(checkLetters) == true) { //notes if someone pressed the key already
            console.log("REPEAT GUESS");
            console.log(airplaneStorage);
            document.getElementById("hint").innerHTML = ("NOPE! Try again.");
            document.getElementById("guess").innerHTML = (airplaneStorage);

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


/************************HANGMAN: "Aliens" Code ************************ */
/************************HANGMAN: "Aliens" Code ************************ */
/************************HANGMAN: "Aliens" Code ************************ */
/************************HANGMAN: "Aliens" Code ************************ */
/************************HANGMAN: "Aliens" Code ************************ */


document.getElementById("fourthButton").onclick = function (event) {

    //Resets the number of lives and letter storage arrays when the button is clicked again.
    var lives = 8;
    aliensStorage = [];
    document.getElementById("guess").innerHTML = (aliensStorage);

    moviesList[1].lettercount = 6;
    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);


    //"resets" the appearance of the counters and displays the word's hint
    document.getElementById("guessesLeft").innerHTML = (lives);
    document.getElementById("hint").innerHTML = ("Hi. I'm Sigourney Weaver. This movie was nothing like finding Dory.");

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
        function checkLetters(letter) {
            return letter === userLetters.toLowerCase();
        }


        //sets the conditions for running this code as long as number of lives is greater than 0)
        if (
            (lives > 0) //checks to make sure user isn't out of lives
            &&
            (moviesList[1].lettercount > 0) // once the count reaches 0 the player has won
            &&
            (moviesList[1].letters.some(checkLetters) == true) // primary function to ensure letter is "correct"
            &&
            (aliensStorage.some(checkLetters) === false) //make sure letter hasn't been used before
        ) {

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
                    moviesList[1].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "NICE ONE!";
                    document.getElementById("firstLetter").innerHTML = "A";
                    document.getElementById("firstLetter").style.fontSize = "30px";

                    break;

                case "l":
                    moviesList[1].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";
                    document.getElementById("secondLetter").innerHTML = "L";
                    document.getElementById("secondLetter").style.fontSize = "30px";

                    break;

                case "i":
                    moviesList[1].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "GOOD JOB!";
                    document.getElementById("thirdLetter").innerHTML = "I";
                    document.getElementById("thirdLetter").style.fontSize = "30px";

                    break;

                case "e":
                    moviesList[1].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "NAILED IT!";
                    document.getElementById("fourthLetter").innerHTML = "E";
                    document.getElementById("fourthLetter").style.fontSize = "30px";

                    break;

                case "n":
                    moviesList[1].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "NOICE!";
                    document.getElementById("fifthLetter").innerHTML = "N";
                    document.getElementById("fifthLetter").style.fontSize = "30px";

                    break;

                case "s":
                    moviesList[1].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[1].lettercount);
                    document.getElementById("hint").innerHTML = "A1!";
                    document.getElementById("sixthLetter").innerHTML = "S";
                    document.getElementById("sixthLetter").style.fontSize = "30px";

                    break;

                default:

                    document.getElementById("hint").innerHTML = "NOT SURE WHAT JUST HAPPENED. TRY AGAIN.";


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
            document.getElementById("hint").innerHTML = ("NOPE! Try again.");
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
            document.getElementById("winsCounter").innerhtml = wins;
            document.getElementById("guess").innerHTML = (aliensStorage);

        }

        else if (aliensStorage.some(checkLetters) == true) { //notes if someone pressed the key already
            console.log("REPEAT GUESS");
            console.log(aliensStorage);
            document.getElementById("hint").innerHTML = ("NOPE! Try again.");
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


/************************HANGMAN: "Arrival" Code ************************ */
/************************HANGMAN: "Arrival" Code ************************ */
/************************HANGMAN: "Arrival" Code ************************ */
/************************HANGMAN: "Arrival" Code ************************ */
/************************HANGMAN: "Arrival" Code ************************ */


document.getElementById("fifthButton").onclick = function (event) {

    //Resets the number of lives and letter storage arrays when the button is clicked again.
    let lives = 8;
    arrivalStorage = [];
    document.getElementById("guess").innerHTML = (arrivalStorage);

    moviesList[0].lettercount = 7;
    document.getElementById("letterCountdown").innerHTML = (moviesList[0].lettercount);


    //"resets" the appearance of the counters and displays the word's hint
    document.getElementById("guessesLeft").innerHTML = (lives);
    document.getElementById("hint").innerHTML = (" Aliens, Time Language, with Amy Adams and Jeremy Renner.");

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
        document.getElementById("letterCountdown").innerHTML = (moviesList[0].lettercount);




        //variables to make the check letter function work
        var userLetters = event.key;
        userText.textContent = userLetters;

        //function for checking users keystrokes against the object.arrays above
        function checkLetters(letter) {
            return letter === userLetters.toLowerCase();
        }

        //sets the conditions for running this code as long as number of lives is greater than 0)
        if (
            (lives > 0) //checks to make sure user isn't out of lives
            &&
            (moviesList[0].lettercount > 0) // once the count reaches 0 the player has won
            &&
            (moviesList[0].letters.some(checkLetters) == true) // primary function to ensure letter is "correct"
            &&
            (arrivalStorage.some(checkLetters) === false) //make sure letter hasn't been used before
        ) {

            //code to push the letters to storage array
            arrivalStorage.push(userLetters);

            //code to push the letter to the display
            var node = document.createElement("p");                 // Create a <li> node
            var textnode = document.createTextNode(arrivalStorage);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("guess").appendChild(node);

            //Begins displaying the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[0].lettercount);


            //checks the letters against the users input and displays them in the proper boxes
            switch (userLetters.toLowerCase()) {
                case "a":
                    moviesList[0].lettercount -=2 ;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[0].lettercount);
                    document.getElementById("hint").innerHTML = "NICE ONE!";
                    document.getElementById("firstLetter").innerHTML = "A";
                    document.getElementById("firstLetter").style.fontSize = "30px";
                    document.getElementById("sixthLetter").innerHTML = "A";
                    document.getElementById("sixthLetter").style.fontSize = "30px";

                    break;

                case "r":
                    moviesList[0].lettercount -= 2;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[0].lettercount);
                    document.getElementById("hint").innerHTML = "YOU GOT ANOTHER!";
                    document.getElementById("secondLetter").innerHTML = "R";
                    document.getElementById("secondLetter").style.fontSize = "30px";
                    document.getElementById("thirdLetter").innerHTML = "R";
                    document.getElementById("thirdLetter").style.fontSize = "30px";

                    break;

                case "i":
                    moviesList[0].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[0].lettercount);
                    document.getElementById("hint").innerHTML = "GOOD JOB!";
                    document.getElementById("fourthLetter").innerHTML = "I";
                    document.getElementById("fourthLetter").style.fontSize = "30px";

                    break;

                case "v":
                    moviesList[0].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[0].lettercount);
                    document.getElementById("hint").innerHTML = "NAILED IT!";
                    document.getElementById("fifthLetter").innerHTML = "V";
                    document.getElementById("fifthLetter").style.fontSize = "30px";

                    break;

                case "l":
                    moviesList[0].lettercount--;
                    document.getElementById("letterCountdown").innerHTML = (moviesList[0].lettercount);
                    document.getElementById("hint").innerHTML = "NOICE!";
                    document.getElementById("seventhLetter").innerHTML = "L";
                    document.getElementById("seventhLetter").style.fontSize = "30px";

                    break;

                default:

                    document.getElementById("hint").innerHTML = "NOT SURE WHAT JUST HAPPENED. TRY AGAIN.";

            }

            //updates the counters
            document.getElementById("guessesLeft").innerHTML = (lives);
            document.getElementById("letterCountdown").innerHTML = (moviesList[0].lettercount);

        }

        else if (
            (lives > 0) //checks to make sure user isn't out of lives
            &&
            (moviesList[0].lettercount > 0) // once the count reaches 0 the player has won
        ) {
            lives--;
            document.getElementById("guessesLeft").innerHTML = (lives);
            arrivalStorage.push(userLetters); // pushes any OTHER LETTERS TO STORAGE
            document.getElementById("hint").innerHTML = ("NOPE. TRY AGAIN!");
            document.getElementById("guess").innerHTML = (arrivalStorage);

        }

        else if (lives <= 0) {
            document.getElementById("guess").innerHTML = (arrivalStorage);
            document.getElementById("hint").innerHTML = ("You Lose!");
            event.stopPropagation();

        }

        else if ((moviesList[0].lettercount === 0)) { // stops the game and increases the wins counter
            wins++;
            document.getElementById("guess").innerHTML = (arrivalStorage);
            document.getElementById("hint").innerHTML = ("You Win!");
            document.getElementById("winsCounter").innerhtml = wins;
            document.getElementById("guess").innerHTML = (arrivalStorage);

        }

        else if (arrivalStorage.some(checkLetters) == true) { //notes if someone pressed the key already
            console.log("REPEAT GUESS");
            console.log(arrivalStorage);
            document.getElementById("hint").innerHTML = ("NOPE. TRY AGAIN!");
            document.getElementById("guess").innerHTML = (arrivalStorage);

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