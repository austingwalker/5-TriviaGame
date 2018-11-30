// Globa Variables

var triviaQuestions = [
    {
        q: "Who's the GOAT?", a: ["MJ", "Kobe", "KD", "Lebron"],
        correctAnswer: "MJ"
    },
    {
        q: "What color is the sky?", a: ["Green", "Yellow", "Blue", "Purple"],
        correctAnswer: "Blue"
    },
    {
        q: "What state is the city of Austin in?", a: ["Montana", "Colorado", "Florida", "Texas"],
        correctAnswer: "Texas"
    },
    {
        q: "Who was the first president of the United States?", a: ["Lincoln", "George Washington", "Bush", "Reagan"],
        correctAnswer: "George Washington"
    }
]

var questionIndex = 0;




var title = $("#title");
var questions = $("#questions");
var startBtn = $(".start");
var answers = $("#answers");
var clock = $("#clock");



var number = 30;
var intervalId;

var correct = 0;
var incorrect = 0;

var questionCounter = 0;

var hasBeenClicked = false;


var clicks;





function runClock() {
    clearInterval(intervalId);
    clock.empty();
    number = 30;
    intervalId = setInterval(decrement, 1000)
}

function decrement() {

    number--;
    clock.html("<h2>" + number + "</h2>");

    if (number === 0) {
        createQuestion()

        incorrect++


    }
}

function stop() {
    clearInterval(intervalId);
    clock.empty();
}

function checkAnswers(ev) {

    

    if (hasBeenClicked) {
        console.log("^^^^^^");
        console.log(ev);
        console.log("^^^^^^");
        console.log("**********");
        console.log(triviaQuestions[questionIndex].correctAnswer)
        console.log("**********");

        if (ev === triviaQuestions[questionIndex].correctAnswer) {

            correct++;
            
            

        }

        else {

            incorrect++;
            
            

        }
        console.log("||||||||||||")
        console.log(correct);
        console.log(incorrect);
        console.log("||||||||||||")

    }

  

}



function createQuestion() {

    title.html("Total Trivia Game")

    startBtn.html("Submit");
    runClock();

    answers.empty();


    if (questionIndex <= (triviaQuestions.length - 1)) {
        questions.html(triviaQuestions[questionIndex].q);


        for (var i = 0; i < triviaQuestions[questionIndex].a.length; i++) {
            answers.append("<button type='button' class='answerbtn btn btn-outline-primary' id='" + triviaQuestions[questionIndex].a[i] + " '>" + triviaQuestions[questionIndex].a[i]);
        }
    }

    else {
        stop();

        questions.html("Game Complete!");
        answers.html("Final Score: " + "<br>" + "Correct: " + correct + "<br>" + "Incorrect: " + incorrect);
        
    }

    
    console.log("=-=-=-=-=-=-=-=-=-=-")
    console.log(correct);
    console.log(incorrect);

    checkAnswers();


}

function nextQuestion() {
    questionIndex++
    createQuestion();
}




startBtn.on("click", function () {




    console.log(correct);
    console.log(incorrect);

    runClock();

    createQuestion();
})






$(document).on('click', ".answerbtn", function (e) {

    hasBeenClicked = true;

    // console.log("-----------------------")
    clicks = $(e.target).attr("id");
    // console.log(clicks);
    // console.log("-----------------------")

    checkAnswers(clicks);

})

// e.target.firstChild;

// var userLetter = String.fromCharCode(event.which).toLowerCase();

