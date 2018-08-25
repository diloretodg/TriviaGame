var correct = 0;
var incorrect = 0;
// array of questions
var questions =[
    { 
        q: "this is the question",
        a: ["this an answer", "this is another", "this one is correct", "this one is not"],
        gif: url="this is the question gif",
        rightAnswer: 2,
    },
    {
        q: "this is the next question",
        a: ["this an answer", "this is another", "this one is not", "this one is correct"],
        gif: url="this is the question gif",
        rightAnswer: 4,
    },
];

var currentQuestionIndex = 0;
var currentQuestion = questions[currentQuestionIndex];


// when called it changes the current question or ends the game if no questions are left
function nextQuestion() {
    if (currentQuestionIndex > questions.length) {
        currentQuestionIndex ++;
        $("tivia-answers").empty();
        $("trivia-question").empty();
        questionDisplay();
    } else {
        gameEnd();
    }
}
// displays the current question in the doc
function questionDisplay() {
    $("#trivia-question").text(currentQuestion.q).attr("class", "question");
    for (var i = 0; i < currentQuestion.a.length; i ++) {
        var answerDiv = $("<div>")
        .attr("class", "answer")
        .attr("data-index", i)
        .text(currentQuestion.a[i]);
        $("#trivia-answers").append($("<hr>"));
        $("#trivia-answers").append(answerDiv);
    };
    setTimeout(triviaTimeout,1000 * 10);
}
function startGame() {
    $("#start-button").hide();
    questionDisplay();
}

function triviaTimeout() {
    incorrect ++;
    console.log("you got this one wrong")
}


// makes guess and checks it
$(".answer").click(function() {
    checkGuess($(this).attr("data-index"));
    nextQuestion();
})

$("#start-button").click(function() {
    startGame();
})




