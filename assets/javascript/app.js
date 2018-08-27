
    var correct = 0;
    var incorrect = 0;
    var triviaTimer = 15;
    var nextQuestionTimer = 3;
    var triviaQuestion = $("#trivia-question");
    var triviaAnswers = $("#trivia-answers");
    var correctDisplay = $("#correct-display");
    var incorrectDisplay = $("#incorrect-display");
    var message = $("<div>")
   
    
    // all of my questions
    var questions = [
        {
          q: "Where did Lynyrd Skynrd get their band name from?",
          a: ["Thir Home Town", "Their teacher", "A poem that inspired them", "A deceased but beloved pet"],
          img: url="this is the question img",
          rightAnswer: 2,
        },
        {
          q: "Which of these people was NOT a member of Led Zeppelin?",
          a: ["Jimmy Page", "John Paul Jones", "Roger Daltrey", "John Bonham"],
          img: url="this is the question img",
          rightAnswer: 3,
        },
        {
          q: "Which one of Prince's songs reached highest on the music charts?",
          a: ["When Dove's Cry", "Kiss", "Let's Go Crazy", "Purple Rain"],
          img: url="this is the question img",
          rightAnswer: 1,
        },
        {
          q: "What American singer-songwriter wrote and first recorded the song Blue Suede Shoes in 1955",
          a: ["Elvis Presley", "Carl Perkins", "Mitch Miller", "Dean Martin"],
          img: url="this is the question img",
          rightAnswer: 2,
        },
        {
          q: "What musician won the Nobel Prize for Literature in 2016?",
          a: ["Juan Santos", "Oliver Hart", "Ben Feringa", "Bob Dylan"],
          img: url="this is the question img",
          rightAnswer: 4,
        },
        {
          q: "What was Elvis Presley's middle name?",
          a: ["Aaron", "David", "Gilbert", "Arthur"],
          img: url="this is the question img",
          rightAnswer: 1,
        },
        {
          q: "Which musician is referred to as the fifth Beatle?",
          a: ["Pete Townsend", "Yoko Ono", "Pete Best", "Richard Hall"],
          img: url="this is the question img",
          rightAnswer: 3,
        },
        {
          q: "Who is Reginald Dwight Better known as?",
          a: ["Frank Ocean", "Elton John", "Ludacris", "Sting"],
          img: url="this is the question img",
          rightAnswer: 2,
        },
        {
          q: "Who is the only member of ZZ Top who doesn't have a long beard?",
          a: ["Billy Gibbons", "Dusty Hill", "Frank Beard", "None of the Above"],
          img: url="this is the question img",
          rightAnswer: 3,
        },
        {
          q: "Which artist sings Pinball Wizard?",
          a: ["The Rolling Stoness", "The Doors", "The Kinks", "The Who"],
          img: url="this is the question img",
          rightAnswer: 4,
        },
        {
          q: "Which song is NOT a Led Zeppelin song?",
          a: ["Black Dog", "Brown Sugar", "Communication Breakdown", "Dazed and Confused"],
          img: url="this is the question img",
          rightAnswer: 2,
        },
        {
          q: "In the original Jackson family line-up, how many BROTHERS were there?",
          a: ["2", "3", "4", "5"],
          img: url="this is the question img",
          rightAnswer: 4,
        },
        {
          q: "Who was the original drummer for Nirvanna?",
          a: ["Chad Channing", "Dave Grohl", "Dave Foster", "Dale Crover"],
          img: url="this is the question img",
          rightAnswer: 1,
        },
        {
          q: "What is the best selling single of all time?",
          a: ["Silent Night", "Candle in the Wind", "White Christmas", "I Will Always Love You"],
          img: url="this is the question img",
          rightAnswer: 3,
        },
        {
          q: "Where did AC/DC get their band name from?",
          a: ["A Satanism Brochure", "A Sewing Machine", "An Electric Company Ad", "Band Member Middle Initials"],
          img: url="this is the question img",
          rightAnswer: 2,
        },
      ];
    
    // the current question selected by its index in questions
    var currentQuestionIndex;
    var currentQuestion;
    
    $("#start-button").click(function() {
        startGame();
    })
    
    function startGame() {
        $("#start-button").hide();
        currentQuestionIndex = Math.floor(Math.random() * questions.length);
        currentQuestion = questions[currentQuestionIndex];
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
        if ((correct + incorrect) < 10) {
            questions.splice(questions.indexOf(currentQuestion), 1);
            currentQuestionIndex = Math.floor(Math.random() * questions.length);
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
            message.html("Correct!! the answer is ..." + "<br>" + currentQuestion.a[currentQuestion.rightAnswer - 1] + "!");
            triviaAnswers.append(message);
        } else {
            message.attr("class", "message lose-message");
            $(message).html("Wrong! the answer was ..." + "<br>" +   currentQuestion.a[currentQuestion.rightAnswer - 1]);
            triviaAnswers.append(message);
        };
    }

// compares the answer data-index value against the rightAnswer val
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
            .attr("data-index", i + 1)
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
    }

    function gameOver() {
        setDisplay();
        var gameOverMessage = $("<div>")
        triviaAnswers.append($("<h1>Game Over<h1>"));
        if (correct > incorrect) {
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
    }


