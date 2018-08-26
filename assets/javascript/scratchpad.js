// working on best timer 

var questionTimeCount = 15;
var nextTimeCount = 5;

// function to be tailored to include display
setTimeout(fn, 1000 * timer)



// array of questions


var currentQuestionIndex = 0;
var currentQuestion = questions[currentQuestionIndex];


// when called it changes the current question or ends the game if no questions are left
function nextQuestion() {
    if (currentQuestionIndex > questions.length) {
        currentQuestionIndex ++;
    } else {
        gameEnd();
    }
}
// displays the current question in the doc


function triviaTimeout() {
    incorrect ++;
    console.log("you got this one wrong")
}

// makes guess and checks it
$(".answer").click(function() {
    checkGuess($(this).attr("data-index"));
    nextQuestion();
})


function gameTimer(time) {
    setInterval()
}


