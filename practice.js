$("#start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
})

$(document).on("click", ".answer-button", function(e){
    game.clicked(e);
})

$(document).on("click", "#reset", function(){
    game.reset();
    
})

var questions = [
    {
        question: "Who's the GOAT?", answers: ["MJ", "Kobe", "KD", "Lebron"],
        correctAnswer: "MJ"
    },
    {
        question: "What color is the sky?", answers: ["Green", "Yellow", "Blue", "Purple"],
        correctAnswer: "Blue"
    },
    {
        question: "What state is the city of Austin in?", answers: ["Montana", "Colorado", "Florida", "Texas"],
        correctAnswer: "Texas"
    },
    {
        question: "Who was the first president of the United States?", answers: ["Lincoln", "George Washington", "Bush", "Reagan"],
        correctAnswer: "George Washington"
    }
]

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    incorrect: 0,
    unanswered: 0,

    countdown: function(){
        game.counter--;
        $("#counter").html("<h5>Time Remaining: " + game.counter);
        if(game.counter <= 0){
            console.log("Time Up!");
            game.timeUp();
        }

    },
    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000)
        $("#subwrapper").html("<h2 id='counter'></h2>")
        $("#subwrapper").append('<h2>' + questions[game.currentQuestion].question + '</h2>');

        for(var i = 0; i < questions[game.currentQuestion].answers.length; i++){
            $("#subwrapper").append('<button class="answer-button" id="button-'+i+'" data-name="' + questions[game.currentQuestion].answers[i]+'">'+questions[game.currentQuestion].answers[i]+'</button>');

        }
    },

    nextQuestion: function(){
        game.counter = 30;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },
    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $("#subwrapper").html("<h2>Out of time!</h2>");
        $("#subwrapper").append("<h3>The Correct Answer Was: " + questions[game.currentQuestion].correctAnswer+"</h3>");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 3*1000);
        }
        else {
            setTimeout(game.nextQuestion, 3*1000);
        }

    },
    results: function(){
        clearInterval(timer);
        $("subwrapper").html('All done!');
        $("#subwrapper").append("<h3>Correct: " + game.correct + "</h3>");
        $("#subwrapper").append("<h3>Incorrect: " + game.incorrect + "</h3>");
        $("#subwrapper").append("<h3>Unanswered: " + game.unanswered + "</h3>");
        $("#subwrapper").append("<button id='reset'>RESET</button>");
    },
    clicked: function(e){

        console.log($(e.target).data("name"))
        console.log(questions[game.currentQuestion].correctAnswer)
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        }
        else{
            game.answeredIncorrectly();
        }

    },
    answeredCorrectly: function(){
        console.log("correct!");
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html('<h2>You got it right!</h2>');
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 3*1000);
        }
        else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    answeredIncorrectly: function(){
        console.log("incorrect!");
        clearInterval(timer);
        game.incorrect++;
        $("#subwrapper").html('<h2>You got it wrong...</h2>');
        $("#subwrapper").append("<h3>The Correct Answer Was: " + questions[game.currentQuestion].correctAnswer+"</h3>");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results, 3*1000);
        }
        else {
            setTimeout(game.nextQuestion, 3*1000);
        }
    },
    reset: function(){
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();

    }
}