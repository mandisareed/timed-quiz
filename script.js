//WHEN the page loads, there is a homepage that explains the instructions for the quiz.

//I need a container to display the instructions text.
var instructions = document.querySelector(".quiz");
instructions.textContent = "This is a multiple-choice quiz of 5 questions to test your basic coding knowledge. You have 60 seconds to complete the quiz. Each time you answer a question correctly, you move on to the next question and the timer will continue counting down at the same rate. If you answer a question INCORRECTLY, the timer will decrease by 15 seconds, continue counting down, and the next question will appear. The quiz is finished once you answer all questions or the timer runs out. Good luck!";

//At the end of the instructions, there is a BUTTON that says "begin quiz"
//INSTRUCTIONS: This is a multiple-choice quiz to test your basic coding knowledge. There are __ questions. Each time you answer a question correctly, you earn 1 point. Each time you choose an incorrect answer, you lose 10 seconds off the timer. At the end, you will be able to enter your initials to save your score. Click the button when ready!

//BEFORE THE GAME BEGINS: the time is at 90 seconds (1000ms = 1s)

//WHEN the user CLICKS the button, the timer begins counting down from 90.
//For each question (there will be 5), there will be 4 choices from which the user can click on.

//IF the user chooses the correct answer (only one per question), "CORRECT!" will be displayed in the window, THEN one point will be added to their score and they move on to the next question.
//ELSE the user chooses an incorrect answer (three per question), "WRONG!" will be displayed in the window, THEN their score does not change. HOWEVER, 10 seconds will be deducted from the timer, and they move on to the next question.

//IF the timer reaches 0 before the end of the quiz, then the user is told "Game Over", shown their score, and PROMPTED to enter their initials and submit them.
//This condition should loop 5 times.

//Local storage saves the user's initials and high score.
//After initials and high score is submitted, the user can click a button "view high scores", that shows the stored initials and high scores.