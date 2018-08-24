    function triviaGame() {
        var correct = 0;
        var incorrect = 0;
        var timer = 20;
        var questionsAsked = 0;
        
        function questionDisplay(x) {
            return questions[x];
            $("#trivia-question").text(this.q);
            for (var i = 0; i < this.a.length; i ++) {
                var newAwnswerDiv = $("<div>");
                newAwnswerDiv.text(this.a[i]);
                $("#trivia-answers").append(newAwnswerDiv);
            };
            questionsAsked ++;
        };

        function currentQuestion(x) {
            questionDisplay(questions[x]);
        };

        var questions ={
            q1: { 
                q: "this is the question",
                a: ["this an answer", "this is another", "this one is correct", "this one is not"],
                gif: url="this is the question gif",
                rightAnswer: 2,
            },
        }
    
    }