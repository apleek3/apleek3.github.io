var triviaQuestions = [

    {
        question: "Sacramento, CA is the ________ of California",
        answersList: ["Capitol", "Butt", "Hat", "Bulk"],
        answer: 0,
    }, {
        question: "Sacramento is California's _______ Capitol",
        answersList: ["2nd", "4th", "6th", "8th"],
        answer: 2,
    }, {
        question: "Sacramento is home to the original Pony Express. A system designed for the expansive delivery of ________",
        answersList: ["Ponies", "Candygrams", "Mail", "Pizzas"],
        answer: 2,
    }, {
        question: "Sacramento's climate is considered _________.",
        answersList: ["Mild", "Tropical", "Whimsical", "Mediterranean"],
        answer: 3,
    }, {
        question: "Sacramento processes more _________ than anywhere else in the world",
        answersList: ["Legislation", "Almonds", "Trout", "Torgo's Executive Powder"],
        answer: 1,
    }, {
        question: "Numerous attactions and animals can be viewed at __________ following a modest entrance fee.",
        answersList: ["the Sacramento Zoo", "the Capitol Building", "the Golden One Arena", "Raley Field"],
        answer: 0,
    }, {
        question: "Sacramento's notable nicknames include: ",
        answersList: ["the City of Trees", "River City", "Sactown", "All of the Above"],
        answer: 3,
    }

]

var gifArray = ["question1", "question2", "question3", "question4", "question5", "question6", "question7"];
var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var unanswered;
var seconds;
var time;
var answered;
var userSelect;

var messages = {
    correct: "You got it!",
    incorrect: "Nope. Do you even Nor-Cal?",
    endTime: "Missed it by THAT much!",
    finished: "How did you do?"
}

//start of the document
$(document).ready(function () {
    $("#resetBtn").hide(); //hide the reset button until the game starts
    $(".answerList").hide();

    $("#startBtn").click(function () {
        $(this).hide(); //game has started. Hide the button
        $(".answerList").show();
        startGame();
    });

    $("#resetBtn").click(function () { //hides all new messages, divs, and timer to restart the game
        $(this).hide();
        $("#startBtn").show();
        $(".answerList").empty();
        clearInterval(time);
        $("#timeLeft").empty();
        $(".question").empty();
        $("#currentQuestion").empty();
        $("#scoreboard").empty();
    });

    function startGame() { //sets everything to 0 and empties all the divs
        $("#finalMessage").empty();
        $("#correctAnswers").empty();
        $("#incorrectAnswers").empty();
        $("#unanswered").empty();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        newQuestion();
    }

    function newQuestion() { //empties out everything making it ready for a new question to appear
        $("#message").empty();
        $("#correctedAnswer").empty();
        $("#gif").empty()
        answered = true;

        //sets up new question & answersList
        $("#currentQuestion").show();
        $("#currentQuestion").html("Question # " + (currentQuestion + 1) + " of " + triviaQuestions.length);
        $(".question").show()
        $(".question").html("<h2>" + triviaQuestions[currentQuestion].question + "</h2>");
        for (var i = 0; i < 4; i++) {
            var choices = $("<button>");
            choices.text(triviaQuestions[currentQuestion].answersList[i]);
            choices.attr({ "data-index": i }); //counts off 4 buttons using the for loop
            choices.addClass("thisChoice"); //adds a class which connects the user to their choice in the countdown bleow
            choices.addClass("btn btn-info"); // adds bootstrap button styling
            choices.attr("type", "radio"); //adds bootstrap radio button
            choices.attr("name", "options");
            choices.attr("autocomplete", "off");
            $(".answerList").append(choices); //sends the answers to the page

        }

        countdown();
        //clicking an answer will pause the time and setup answerPage
        $(".thisChoice").on("click", function () {
            userSelect = $(this).data("index");
            clearInterval(time);
            answerPage();
        });
    }

    function countdown() {
        seconds = 15;
        $("#timeLeft").show();
        $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
        answered = true;
        //sets timer to go down
        time = setInterval(showCountdown, 1000);
    }

    function showCountdown() {
        seconds--;
        $("#timeLeft").html("<h3>Time Remaining: " + seconds + "</h3>");
        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerPage();
        }
    }

    function answerPage() {
        $("#currentQuestion").empty();
        $(".thisChoice").empty(); //Clears question page
        $(".question").empty();
        $(".answerList").empty();

        var rightAnswerText = triviaQuestions[currentQuestion].answersList[triviaQuestions[currentQuestion].answer];
        var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
        $('#gif').html('<img src = "assets/images/' + gifArray[currentQuestion] + '.gif" width = "400px">');
        //checks to see correct, incorrect, or unanswered
        if ((userSelect == rightAnswerIndex) && (answered == true)) {
            correctAnswer++;
            $('#message').html(messages.correct);
        } else if ((userSelect != rightAnswerIndex) && (answered == true)) {
            incorrectAnswer++;
            $('#message').html(messages.incorrect);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        } else {
            unanswered++;
            $('#message').html(messages.endTime);
            $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
            answered = true;
        }

        if (currentQuestion == (triviaQuestions.length - 1)) {
            setTimeout(scoreboard, 5000)
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 5000);
        }
    }

    function scoreboard() {
        $('#timeLeft').empty();
        $('#message').empty();
        $('#correctedAnswer').empty();
        $('#gif').empty();

        $("#resetBtn").show(); //make the reset button available    

        $('#finalMessage').html(messages.finished);
        $('#correctAnswers').html("Correct Answers: " + correctAnswer);
        $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
        $('#unanswered').html("Unanswered: " + unanswered);
    }

}); //ending bracket for $(document).ready(function() - do not touch!!!


