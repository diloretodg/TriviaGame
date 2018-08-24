var correct = 0;
var incorrect = 0;
var timer = 20;
var gameStart = false;




var questions = [{
    q1: { 
        q: "this is the question",
        a: ["this an answer", "this is another", "this one is correct", "this one is not"],
        gif: url="this is the question gif",
        rightAnswer: 2,
    },
    q2: {
        q: "this is the question",
        a: ["this an answer", "this is another", "this one is correct", "this one is not"],
        gif: url="this is the question gif",
        rightAnswer: 2,
    },
    q3: {
        q: "this is the question",
        a: ["this an answer", "this is another", "this one is correct", "this one is not"],
        gif: url="this is the question gif",
        rightAnswer: 2,
    },
    q4: {
        q: "this is the question",
        a: ["this an answer", "this is another", "this one is correct", "this one is not"],
        gif: url="this is the question gif",
        rightAnswer: 2,
    },
    q5: {
        q: "this is the question",
        a: ["this an answer", "this is another", "this one is correct", "this one is not"],
        gif: url="this is the question gif",
        rightAnswer: 2,
    },
    q6: {
        q: "this is the question",
        a: ["this an answer", "this is another", "this one is correct", "this one is not"],
        gif: url="this is the question gif",
        rightAnswer: 2,
    },
    q7: {
        q: "this is the question",
        a: ["this an answer", "this is another", "this one is correct", "this one is not"],
        gif: url="this is the question gif",
        rightAnswer: 2,
    },
    q8: {
        q: "this is the question",
        a: ["this an answer", "this is another", "this one is correct", "this one is not"],
        gif: url="this is the question gif",
        rightAnswer: 2,
    },
    q9: {
        q: "this is the question",
        a: ["this an answer", "this is another", "this one is correct", "this one is not"],
        gif: url="this is the question gif",
        rightAnswer: 2,
    },
    q10: {
        q: "this is the question",
        a: ["this an answer", "this is another", "this one is correct", "this one is not"],
        gif: url="this is the question gif",
        rightAnswer: 2,
    }
}];



$("#start-button").click(function () {
    startGame();
});

function startGame() {
    gameStart = true;
    console.log("the game started");
    pickQuestion();
    
}

function questionTimer() {

}