console.log("connected");
var timeEL = document.getElementById("timer");
var question = document.getElementById("question");
var answerButtons = document.querySelector(".answer-btn");
var button = document.getElementById("button");
var startButton = document.getElementById("start-button");
var nextButton = document.getElementById("next-button");
var wins = document.getElementById("wins");
var score;

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
//this = true
var secondsLeft = 60;

var index = 0
var questionIndexObjArray = [
    {   question: 'The Salish Sea touches how many countries?',
        answer1: 1,
        answer2: 2,
        answer3: 3,
        correctAnswer: 2
    },
    {   question: 'The Salish Sea touches how many countries?',
        answer1: 1,
        answer2: 2,
        answer3: 3,
        correctAnswer: 2
    }

function displayQuestion() {
    question.textContent = questionIndexObjArray[index].question
    answer1.textContent = questionIndexObjArray[index].answer1
    answer2.textContent = questionIndexObjArray[index].answer2
    answer3.textContent = questionIndexObjArray[index].answer3
}

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEL.textContent = secondsLeft;

        if (secondsLeft === 0) {
            score == 0;
            clearInterval(timerInterval);
        }
    }, 1000);
}
//event listener for start button, yes
//hide start button after it is clicked, yes
//replace with next button, yes 

function startGame() {
    setTime();
    startButton.remove();
    //   if (nextButton.style.display === "none") {
    displayQuestion()
    nextButton.style.display = "block"
    // }
    //  if (answerButtons.style.display === "none") {
    answerButtons.style.display = "block"
    // }
    //press start (click event)
    //timer starts    
    //question is loaded via random generator
}

function selectNextQuestion() {

    //click event happens
    //index increases
    //display question is called 

}

function chooseAnswer() {
    //click event happens
    //answer is chosen by user
    //answer is compared to true answer
    //if answer is true, add one point to wins, 
    //if answer is false, -5 seconds from timer
}

//function Game()

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", selectNextQuestion)


//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score

//The start button becomes a next button when the game is started
//The header has rules for the game, and below is the start button.
//The game starts when the button is CLICKED, the header has the first question (object)
//The body of the .card will contain the multiple choice questions,
//the correct answer defined by .this=true
//objects, and object answers, will be randomized

//when a question is answered wrong a TIMER starts

//the game ends when the timer runs out OR the questions are answered

//The user is prompted to STORE their name and score for the next time they play