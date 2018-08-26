$(document).ready(function() {
    var correct = 0;
    var incorrect = 0;
    var triviaTimer = 15;
    var nextQuestionTimer = 5;
    var triviaQuestion = $("#trivia-question");
    var triviaAnswers = $("#trivia-answers");
    var correctDisplay = $("#correct-display");
    var incorrectDisplay = $("#incorrect-display");
   
    
    // all of my questions
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
            rightAnswer: 3,
        },
    ];
    
    // the current question selected by its index in questions
    var currentQuestionIndex = 0;
    var currentQuestion = questions[currentQuestionIndex];
    
    $("#start-button").click(function() {
        startGame();
    })
    
    function startGame() {
        $("#start-button").hide();
        questionDisplay();
    
    }
    
    // makes guess and checks it
    $(document).on("click", ".answer", makeGuess)


    function makeGuess() {
        checkGuess($(this).attr("data-index"));
        setTimeout(nextQuestion, 1000 * nextQuestionTimer);
        setDisplay();
        triviaMessage($(this).attr("data-index"));
    }

    function nextQuestion() {
        if (currentQuestionIndex < questions.length)
        currentQuestionIndex ++;
        setDisplay();
        questionDisplay();
    }

function triviaMessage(val) {
    var message = $("<div>")
    currentQuestion = questions[currentQuestionIndex];
    if (val == currentQuestion.rightAnswer) {
        message.attr("class", "message win-message");
        message.text("Correct!! the answer was " + currentQuestion.a[currentQuestion.rightAnswer] + "!");
        triviaAnswers.append(message);
    } else {
        message.attr("class", "message lose-message");
        $(message).text("...Sorry... the answer was " +  currentQuestion.a[currentQuestion.rightAnswer]);
        triviaAnswers.append(message);
    };
    console.log(message)
}

    function checkGuess(value) {
        if (value == currentQuestion.rightAnswer) {
            correct ++;
        } else {
            incorrect ++;
        }
        console.log(correct + " " + incorrect);
    }

    // displays the current question
    function questionDisplay() {
        currentQuestion = questions[currentQuestionIndex];
        $("#trivia-question").text(currentQuestion.q).attr("class", "question");
        for (var i = 0; i < currentQuestion.a.length; i ++) {
            var answerDiv = $("<div>")
            .attr("class", "answer")
            .attr("data-index", i)
            .text(currentQuestion.a[i]);
            $("#trivia-answers").append($("<hr>"));
            $("#trivia-answers").append(answerDiv);
        };
    }
    
    // updates the score text
    function updateCorrectDisplay() {
        correctDisplay.text(correct);
        incorrectDisplay.text(incorrect);
    }
    
    // updates all displays to current values
    function setDisplay() {
        triviaQuestion.empty();
        triviaAnswers.empty();
        updateCorrectDisplay();
    };
})

