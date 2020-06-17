//WHEN the page loads, there is a homepage that explains the instructions for the quiz.
//I need a container to display the instructions text.
var instructions = document.querySelector(".instructions");
instructions.textContent =
  "This is a multiple-choice quiz of 5 questions to test your basic coding knowledge. You have 60 seconds to complete the quiz. Each time you answer a question correctly, you move on to the next question and the timer will continue counting down at the same rate. If you answer a question INCORRECTLY, the timer will decrease by 15 seconds, continue counting down, and the next question will appear. The quiz is finished once you answer all questions or the timer runs out. Good luck!";

//a variable to reference the container div so that I can clear its contents
var container = document.querySelector("#container");

//a variable to reference the begin quiz button
var buttonEL = document.getElementsByClassName("#begin");

//create a variable to reference the time element
var timeEl = document.querySelector(".timer");

//I need to create an object that houses the questions, answers, and actual answers.
var quiz = {
  questionOne: "What does a javascript file end in?",
  answersOne: {
    a: "a: .html",
    b: "b: .js",
    c: ".css",
  },
  actualAnswer1: "b",
};
//And JSON stringify the object to turn it into a string
var myJSONquiz = JSON.stringify(quiz);

//At the end of the instructions, there is a BUTTON that says "begin quiz"
//WHEN the user CLICKS the button, the text displayed in the container will change to the first question + answer choices
document.getElementById("begin").addEventListener("click", function () {
  document.getElementById("container").innerHTML = " ";
  var question = document.createElement("h1");
  question.textContent = quiz.questionOne;
  document.getElementById("container").appendChild(question);
  var answer1 = document.createElement("p");
  answer1.textContent = quiz.answersOne.a;
  question.appendChild(answer1);
  var answer2 = document.createElement("p");
  answer2.textContent = quiz.answersOne.b;
  question.appendChild(answer2);
  setTime();

  //BEFORE THE GAME BEGINS: the time is at 10 seconds (1000ms = 1s)
  //set a variable to track seconds remaining

  //create a function to start the countdown

  setTimeout(function () {
    alert("Hello");
  }, 10000);
});

var secondsLeft = 10;
function setTime() {
  //use setInterval so that the timer will continue counting down as the quiz progresses
  var timerInterval = setInterval(function () {
    //each interval does the following:
    //decrement time remaining
    secondsLeft--;
    //update the countdown
    timeEl.textContent = "Time remaining: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
  console.log("test");
}

//For each question, there will be choices from which the user can click on.

//IF the user chooses the correct answer (only one per question), "CORRECT!" will be displayed in the window, THEN one point will be added to their score and they move on to the next question.
//ELSE the user chooses an incorrect answer (three per question), "WRONG!" will be displayed in the window, THEN their score does not change. HOWEVER, 10 seconds will be deducted from the timer, and they move on to the next question.

//IF the timer reaches 0 before the end of the quiz, then the user is told "Game Over", shown their score, and PROMPTED to enter their initials and submit them.

//Local storage saves the user's initials and high score.
//After initials and high score is submitted, the user can click a button "view high scores", that shows the stored initials and high scores.
