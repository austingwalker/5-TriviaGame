var start = $("#start");
var subwrapper = $("#subwrapper");


start.on("click", function(){
    start.remove();
    game.loadQuestion();
});

$(document).on("click", "#answerbtn", function(e){
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
            $("#counter").html("<h2>TIME REMAINING: " + game.counter + "</h2>");
            if(game.counter <= 0){
                alert("Out of time!")
                this.timesUp();

                
            }

        },
        timesUp: function(){

        },
        loadQuestion: function(){
            setInterval(game.countdown, 1000);

            subwrapper.html("<h2>" + game.questions[currentQuestion].question + "<h2>");

            for(var i = 0; i < game.questions[currentQuestion].answers; i++){
            subwrapper.append("<h2 id='answerbtn'data-name='" + game.questions[currentQuestion].answers[i] >" + game.questions[currentQuestion].answers[i] + </h2>")
            }



        },
        nextQuestion: function(){

        },
        clicked: function(){

        },
        correctAnswer: function(){

        },
        incorrectAnswer: function(){

        },
        results: function(){

        },
        reset: function(){

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

