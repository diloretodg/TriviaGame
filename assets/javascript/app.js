
var triviaQuestion = $("#trivia-question");
var triviaAnswers = $("#trivia-answers");
var correctDisplay = $("#correct-display");
var incorrectDisplay = $("#incorrect-display");
var message = $("<div>")
var questions; 
var currentQuestionIndex;
var currentQuestion;
var triviaTimer = 10;
var nextQuestionTimer = 5;
var gameTimerCountdown;
var correct = 0;
var incorrect = 0;

// timer function 
function gameClock(c, fn) {
    var gameTimer = $("<div>").attr("class", "game-timer");
    triviaAnswers.append(gameTimer);
    var counter = c;
    gameTimerCountdown = setInterval(function(){
        gameTimer.text(counter);
        counter--;
    if (counter < 3) {
        gameTimer.attr("class", "game-timer text-danger");
    };
    if (counter == -1) {
        gameTimer.empty();
        clearInterval(gameTimerCountdown);
        fn();
      };
    }, 1000);
}
// initializes game values and info each time called
function startGame() {
    correct = 0;
    incorrect = 0;
    questions = questionsArr
    $(".start-button").hide();
    setDisplay();
    questionDisplay();
}

// makes guess and checks it based on element clicked
function makeGuess() {
    clearInterval(gameTimerCountdown);
    checkGuess($(this).attr("data-index"));
    setDisplay();
    triviaMessage($(this).attr("data-index"));
}
// qualifies if quiz continues or not
function nextQuestion() {
    if ((correct + incorrect) < 10) {

        setDisplay();
        questionDisplay();
    } else {
        gameOver();
    }
}

// this displays the message inbetween questions
function triviaMessage(val) {
    if (val == currentQuestion.rightAnswer) {
        message.attr("class", "message win-message");
        message.html("Correct!! The answer is ..." + "<br>" + currentQuestion.a[currentQuestion.rightAnswer] + "!");
        triviaAnswers.append(message);
    } else {
        if (val == undefined ) {
            message.attr("class", "message lose-message");
            $(message).html("Time Up! The answer was ..." + "<br>" +   currentQuestion.a[currentQuestion.rightAnswer]);
            triviaAnswers.append(message);
        } else {
            message.attr("class", "message lose-message");
            $(message).html("Wrong! The answer was ..." + "<br>" +   currentQuestion.a[currentQuestion.rightAnswer]);
            triviaAnswers.append(message);
        }
    }  
    triviaAnswers.append($("<br>"));
    triviaAnswers.append($("<h5>")
    .text(currentQuestion.answerDetails)
    .attr("class", "mx-5 px-5"));
    gameClock(nextQuestionTimer, nextQuestion)
};
   
// compares the answer data-index value against the rightAnswer val
function checkGuess(value) {
    if (value == currentQuestion.rightAnswer) {
        correct ++;
    } else {
        incorrect ++;
    }
}

// displays the current question
function questionDisplay() {
    var letters = ["A.)", "B.)", "C.)", "D.)"];
    questions.splice(questions.indexOf(currentQuestion), 1);
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[currentQuestionIndex];
    $("#trivia-question").text(currentQuestion.q).attr("class", "question");
    for (var i = 0; i < currentQuestion.a.length; i ++) {
        var answerDiv = $("<div>")
        .attr("class", "answer")
        .attr("data-index", i)
        .text(letters[i] + "   " + currentQuestion.a[i]);
        $("#trivia-answers").append($("<hr>"));
        $("#trivia-answers").append(answerDiv);
    };
    gameClock(triviaTimer, makeGuess);
}

// updates the score text
function updateCorrectDisplay() {
    correctDisplay.text(correct);
    incorrectDisplay.text(incorrect);
}

// selectivly clears trivia display
function setDisplay() {
    triviaAnswers.empty();
    triviaQuestion.empty();
    updateCorrectDisplay();
}

// creates final page with score and restart button
function gameOver() {
    setDisplay();
    var gameOverMessage = $("<div>");
    var score = (correct / (correct + incorrect) * 100)
    triviaAnswers.append($("<h1>Game Over<h1>").attr("class", "text-center"));
    if (score > 65) {
        gameOverMessage.attr("class", "message win-message")
        .text("Congrats!! Your Score is " + (correct / (correct + incorrect) * 100) +"%");
        message.attr("class", "message win-message");
    } else {
        gameOverMessage.attr("class", "message lose-message")
        .text("Too Bad. Your Score is " + (correct / (correct + incorrect) * 100) +"%");
        message.attr("class", "message lose-message");
    }
    triviaAnswers.append(gameOverMessage);
    message.text("Questions Correct: " + correct);
    triviaAnswers.append(message);
    message.text("Questions Wrong: " + incorrect);
    triviaAnswers.append($("<div>").text("Restart Quiz").attr("class", "btn btn-primary restart start-button btn-lg"));
}

// onclick functions
$(document).on("click", ".start-button", startGame);
$(document).on("click", ".answer", makeGuess);