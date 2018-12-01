var start = $("#start");
var subwrapper = $("#subwrapper");


start.on("click", function(){
    start.remove();
    game.loadQuestion();
});

$(document).on("click", ".answer-button", function(e){
    game.clicked(e);
});

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
    ];

    var game = {
        questions: questions,
        currentQuestion: 0,
        counter: 30,
        correct: 0,
        incorrect: 0,
        unanswered: 0,

        countdown: function(){
            game.counter--;
            $("#counter").html("<h5>TIME REMAINING: " + game.counter + "</h5>");
            if(game.counter <= 0){
                game.timesUp();

                
            }

        },
        timesUp: function(){
            clearInterval(timer);
            game.unanswered++

            subwrapper.html("<h2>Out of time!</h2>")

            if(game.currentQuestion == questions.length - 1){
                setTimeout(game.results, 3*1000);
            }

            else {
                setTimeout(game.nextQuestion, 3*1000)
            }

        },
        loadQuestion: function(){
            timer = setInterval(game.countdown, 1000);

            subwrapper.html("<div id='counter'></div>")
            subwrapper.append("<h2>" + questions[game.currentQuestion].question + "<h2>");

            for(var i = 0; i < questions[game.currentQuestion].answers.length; i++){
                subwrapper.append('<button class="answer-button" id="button-'+i+'" data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>')
            }

          



        },
        nextQuestion: function(){
            game.counter = 30
            $("#counter").html(game.counter);
            game.currentQuestion++
            game.loadQuestion();

        },
        clicked: function(e){
            
            console.log($(e.target).data("name"));
            console.log(questions[game.currentQuestion].correctAnswer)

            

            clearInterval(timer);

            if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer){
                game.answeredCorrectly();
            }
            else {
                game.answeredIncorrectly();
            }

        },
        answeredCorrectly: function(){

            game.correct++
            
            if(game.currentQuestion >= questions.length - 1){
                game.results()
            }

            else {
                clearInterval(timer);
                subwrapper.html("<h2>Correct!</h2>")
                setTimeout(game.nextQuestion, 3*1000)
            }
            

        },
        answeredIncorrectly: function(){

            game.incorrect++

            if(game.currentQuestion >= questions.length - 1){
                game.results()
            }

            else {
                clearInterval(timer);
                subwrapper.html("<h2>Incorrect!</h2>")
                setTimeout(game.nextQuestion, 3*1000)
            }

        },
        results: function(){

            subwrapper.html("<div>Game Over</div>");
            subwrapper.append("<div>Correct: " + game.correct +"</div>");
            subwrapper.append("<div>Inorrect: " + game.incorrect +"</div>");
            subwrapper.append("<div>Unanswered: " + game.unanswered +"</div>");
            subwrapper.append("<button id='reset'>RESET</div>");

        },
        reset: function(){

            game.currentQuestion = 0;
            game.counter = 30
            game.correct = 0;
            game.incorrect = 0;
            game.unanswered = 0;
            game.loadQuestion();

        }

    }




























// First Draft below -------------------------------------------------------------------------

// // Globa Variables

// var triviaQuestions = [
//     {
//         q: "Who's the GOAT?", a: ["MJ", "Kobe", "KD", "Lebron"],
//         correctAnswer: "MJ"
//     },
//     {
//         q: "What color is the sky?", a: ["Green", "Yellow", "Blue", "Purple"],
//         correctAnswer: "Blue"
//     },
//     {
//         q: "What state is the city of Austin in?", a: ["Montana", "Colorado", "Florida", "Texas"],
//         correctAnswer: "Texas"
//     },
//     {
//         q: "Who was the first president of the United States?", a: ["Lincoln", "George Washington", "Bush", "Reagan"],
//         correctAnswer: "George Washington"
//     }
// ]

// var questionIndex = 0;




// var title = $("#title");
// var questions = $("#questions");
// var startBtn = $(".start");
// var answers = $("#answers");
// var clock = $("#clock");



// var number = 30;
// var intervalId;

// var correct = 0;
// var incorrect = 0;

// var questionCounter = 0;

// var hasBeenClicked = false;


// var clicks;





// function runClock() {
//     clearInterval(intervalId);
//     clock.empty();
//     number = 30;
//     intervalId = setInterval(decrement, 1000)
// }

// function decrement() {

//     number--;
//     clock.html("<h2>" + number + "</h2>");

//     if (number === 0) {
//         createQuestion()

//         incorrect++


//     }
// }

// function stop() {
//     clearInterval(intervalId);
//     clock.empty();
// }

// function checkAnswers(e) {

    

//     if (hasBeenClicked) {
//         console.log("^^^^^^");
//         console.log(e);
//         console.log("^^^^^^");
//         console.log("**********");
//         console.log(triviaQuestions[questionIndex].correctAnswer)
//         console.log("**********");

//         if ($(e.target).data("name") == triviaQuestions[questionIndex].correctAnswer) {

//             correct++;
            
            

//         }

//         else {

//             incorrect++;
            
            

//         }
//         console.log("||||||||||||")
//         console.log(correct);
//         console.log(incorrect);
//         console.log("||||||||||||")

//     }

  

// }



// function createQuestion() {

//     title.html("Total Trivia Game")

//     startBtn.html("Submit");
//     runClock();

//     answers.empty();


//     if (questionIndex <= (triviaQuestions.length - 1)) {
//         questions.html(triviaQuestions[questionIndex].q);


//         for (var i = 0; i < triviaQuestions[questionIndex].a.length; i++) {
//             answers.append('<button class="answerbtn" id="button-'+i+'" data-name="' + triviaQuestions[questionIndex].a[i] + '" >' + triviaQuestions[questionIndex].a[i] + '</button>');
//         }
//     }

//     else {
//         stop();

//         questions.html("Game Complete!");
//         answers.html("Final Score: " + "<br>" + "Correct: " + correct + "<br>" + "Incorrect: " + incorrect);
        
//     }

    
//     console.log("=-=-=-=-=-=-=-=-=-=-")
//     console.log(correct);
//     console.log(incorrect);

//     checkAnswers();


// }

// // function nextQuestion() {
// //     questionIndex++
// //     createQuestion();
// // }




// startBtn.on("click", function () {




//     console.log(correct);
//     console.log(incorrect);

//     runClock();

//     createQuestion();
// })






// $(document).on('click', ".answerbtn", function (e) {

//     hasBeenClicked = true;

//     // console.log("-----------------------")
 
//     // console.log(clicks);
//     // console.log("-----------------------")

//     checkAnswers(e);

// })

// // e.target.firstChild;

// // var userLetter = String.fromCharCode(event.which).toLowerCase();

