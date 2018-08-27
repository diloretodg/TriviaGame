
var correct = 0;
var incorrect = 0;
var triviaTimer = 20;
var nextQuestionTimer = 6;
var triviaQuestion = $("#trivia-question");
var triviaAnswers = $("#trivia-answers");
var correctDisplay = $("#correct-display");
var incorrectDisplay = $("#incorrect-display");
var message = $("<div>")
var letters = ["A.)", "B.)", "C.)", "D.)"]
var gameTimer = $("<div>");
var gameTimerCountdown;
// all questions and relevant info
var questions = [
    {
        q: "Where did Lynyrd Skynyrd get their band name from?",
        a: ["A town", "A teacher", "A poem", "A deceased pet"],
        img: url="this is the question img",
        rightAnswer: 3,
        answerDetails: "The name Lynyrd Skynyrd comes from their high school gym teacher, Leonard Skinner, who harrassed the boys for having long hair."
    },
    {
        q: "Which of these people was NOT a member of Led Zeppelin?",
        a: ["Jimmy Page", "John Paul Jones", "Roger Daltrey", "John Bonham"],
        img: url="this is the question img",
        rightAnswer: 3,
        answerDetails: "Roger Daltrey is the founder and lead singer of the rock band the Who, which released 14 singles that entered the Top 10 charts in the United Kingdom during the 1960s, 1970s, and 1980s."
    },
    {
        q: "Which one of Prince's songs reached highest on the music charts?",
        a: ["When Doves Cry", "Kiss", "Let's Go Crazy", "Purple Rain"],
        img: url="this is the question img",
        rightAnswer: 1,
        answerDetails: "When Doves Cry is was the lead single from Prince's 1984 album Purple Rain. It was a worldwide hit and his first American number one single, topping the charts for five weeks."
    },
    {
        q: "What American singer-songwriter wrote and first recorded the song Blue Suede Shoes in 1955",
        a: ["Elvis Presley", "Carl Perkins", "Buddy Holly", "Dean Martin"],
        img: url="this is the question img",
        rightAnswer: 2,
        answerDetails: "Blue Suede Shoes was written and first recorded by Carl Perkins. It was later performed by many other artists including Elvis Presley, Buddy Holly, and Eddie Cochran."
    },
    {
        q: "What musician won the Nobel Prize for Literature in 2016?",
        a: ["Juan Santos", "Oliver Hart", "Ben Feringa", "Bob Dylan"],
        img: url="this is the question img",
        rightAnswer: 4,
        answerDetails: "Bob Dylan was awarded the Nobel Prize in Literature 'for having created new poetic expressions within the great American song tradition'. He was first musician to win the award."
    },
    {
        q: "What was Elvis Presley's middle name?",
        a: ["Aaron", "David", "Gilbert", "Arthur"],
        img: url="this is the question img",
        rightAnswer: 1,
        answerDetails: "Originally spelled Aron on his birth certificate, Elvis sought to change his middle name's spelling to the traditional Aaron. Knowing Elvis' plans, Aaron is the spelling his father chose for Elvis' tombstone and that his estate designated as the official spelling."
    },
    {
        q: "Which musician is referred to as the fifth Beatle?",
        a: ["Pete Townsend", "Yoko Ono", "Pete Best", "Richard Hall"],
        img: url="this is the question img",
        rightAnswer: 3,
        answerDetails: "Pete Best was the original drummer of the Beatles. He played with the band during their time as a club act, in both Liverpool and Hamburg, Germany. The band during this time period consisted of Best, bassist Stuart Sutcliffe, and guitarists McCartney, Harrison, and Lennon."
    },
    {
        q: "Who is Reginald Dwight better known as?",
        a: ["Frank Ocean", "Elton John", "Ludacris", "Sting"],
        img: url="this is the question img",
        rightAnswer: 2,
        answerDetails: "On May 7th, 1972 Reginald Kenneth Dwight legally changed his name to Elton Hercules John. He chose the name because of his love for Blues legends Elton Dean and Long John Baldry."
    },
    {
        q: "Who is the only member of ZZ Top who doesn't have a long beard?",
        a: ["Billy Gibbons", "Dusty Hill", "Frank Beard", "None of the Above"],
        img: url="this is the question img",
        rightAnswer: 3,
        answerDetails: "Guitarists Billy Gibbons and Dusty Hill have been wearing the signature look since the late '70s, while the group's drummer, whose name is ironically Frank Beard, prefers to maintain a clean shave."
    },
    {
        q: "Which artist sings Pinball Wizard?",
        a: ["The Rolling Stoness", "The Doors", "The Kinks", "The Who"],
        img: url="this is the question img",
        rightAnswer: 4,
        answerDetails: "Pinball Wizard is one of The Who's most famous songs, being played at almost every Who concert since its debut live performance on May 2nd, 1969."
    },
    {
        q: "Which song is NOT a Led Zeppelin song?",
        a: ["Black Dog", "Brown Sugar", "Communication Breakdown", "Dazed and Confused"],
        img: url="this is the question img",
        rightAnswer: 2,
        answerDetails: "Brown Sugar is a song by the Rolling Stones. It is the opening track and lead single from their album Sticky Fingers (1971). Rolling Stone magazine ranked it number 495 on its list of the 500 Greatest Songs of All Time and at number five on their list of the 100 Greatest Guitar Songs of All Time."
    },
    {
        q: "In the original Jackson family line-up, how many brothers were there?",
        a: ["2", "3", "4", "5"],
        img: url="this is the question img",
        rightAnswer: 2,
        answerDetails: "Formed in 1964, the founding members were elder brothers Jackie, Tito and Jermaine. Younger brothers Marlon and Michael would join soon after."
    },
    {
        q: "Who was the original drummer for Nirvana?",
        a: ["Chad Channing", "Dave Grohl", "Keith Moon", "Ginger Baker"],
        img: url="this is the question img",
        rightAnswer: 1,
        answerDetails: "Chad Channing was a member of Nirvana from 1988-1990. He parted ways with the band before their mainstream success. Nirvana's longest-lasting and best-known drummer was Dave Grohl, who joined in 1990."
    },
    {
        q: "What is the best selling single of all time?",
        a: ["Silent Night", "Candle in the Wind", "White Christmas", "I Will Always Love You"],
        img: url="this is the question img",
        rightAnswer: 3,
        answerDetails: "White Christmas is a 1942 Irving Berlin song reminiscing about an old-fashioned Christmas setting. The version sung by Bing Crosby is the world's best-selling single with estimated sales in excess of 100 million copies worldwide"
    },
    {
        q: "Where did AC/DC get their band name from?",
        a: ["A Satanism Brochure", "A Sewing Machine", "An Electric Company Ad", "Band Member Middle Initials"],
        img: url="this is the question img",
        rightAnswer: 2,
        answerDetails: "Malcolm and Angus Young developed the idea for the band's name after their sister, Margaret Young, saw the initials AC/DC on a sewing machine. AC/DC is an abbreviation meaning 'alternating current/direct current' electricity. The brothers felt that this name symbolised the band's raw energy, power-driven performances of their music."
    },
]

// the current question selected by its index in questions
var currentQuestionIndex;
var currentQuestion;

$("#start-button").click(function() {
    startGame();
})

// timer function

function gameClock(c, fn) {
    triviaAnswers.append(gameTimer
        .attr("class", "game-timer")
        .text(c));
    var counter = c;
    gameTimerCountdown = setInterval(function(){
      gameTimer.text(counter);
      counter--;
      if (counter < 5) {
          gameTimer.attr("class", "game-timer text-danger");
      };
      if (counter === -1) {
        console.log("times up");
        clearInterval(gameTimerCountdown);
        fn();
      };
    }, 1000);
}

function startGame() {
    $("#start-button").hide();
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[currentQuestionIndex];
    questionDisplay();
}

// makes guess and checks it
$(document).on("click", ".answer", makeGuess)

function makeGuess() {
    clearInterval(gameTimerCountdown);
    checkGuess($(this).attr("data-index"));
    setTimeout(nextQuestionTimer, nextQuestion);
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
        message.html("Correct!! The answer is ..." + "<br>" + currentQuestion.a[currentQuestion.rightAnswer - 1] + "!");
        triviaAnswers.append(message);
    } else {
        if (val == undefined ) {
            message.attr("class", "message lose-message");
            $(message).html("Time Up! The answer was ..." + "<br>" +   currentQuestion.a[currentQuestion.rightAnswer - 1]);
            triviaAnswers.append(message);
        } else {
            message.attr("class", "message lose-message");
            $(message).html("Wrong! The answer was ..." + "<br>" +   currentQuestion.a[currentQuestion.rightAnswer - 1]);
            triviaAnswers.append(message);
        }
    }  
    triviaAnswers.append($("<br>"));
    triviaAnswers.append($("<p>").
    text(currentQuestion.answerDetails)
    .attr("class", "mx-5"));
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
    currentQuestion = questions[currentQuestionIndex];
    $("#trivia-question").text(currentQuestion.q).attr("class", "question");
    for (var i = 0; i < currentQuestion.a.length; i ++) {
        var answerDiv = $("<div>")
        .attr("class", "answer")
        .attr("data-index", i + 1)
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

// updates all displays to current values
function setDisplay() {
    triviaQuestion.empty();
    triviaAnswers.empty();
    updateCorrectDisplay();
}

function gameOver() {
    setDisplay();
    var gameOverMessage = $("<div>")
    triviaAnswers.append($("<h1>Game Over<h1>").attr("class", "text-center"));
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