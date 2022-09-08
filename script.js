
/* 
   Welcome to the Magic 8-ball Project.  Complete the 
   tasks outlined by the comments in this file.

   The following functions are available to you 
   (you can just call them):

   // This will hide the '8' (if shown) and 
   // show the triangle (if hidden).  It will
   // set the text on the triangle to the
   // string 'answerText'.
   function makeAnswerAppear(answerText)
*/

/* Returns a random integer in the range 'min' through 'max' inclusive. 

   This can be taken directly from MDN documentation: 
     https://tinyurl.com/3jkxa8h3

*/
function getRandomIntInclusive(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
}

/* Write a function that handles the magic 8-ball being clicked. Here are the steps:

   - Create an array containing at least 5 possible answers as strings.
   - Generate a random array index by calling 
       getRandomIntInclusive function.
   - Call 'makeAnswerAppear' using the random
       answer you selected.
   - (Level-up) Prevent your code from selecting the 
       same answer multiple times in a row 
       (loops could be required).
*/
let previousAnswer = "Hello World!";

function answerQuestion() {
  let possibleAnswers = ["It is Certain.", "As I see it, yes.", "Reply hazy, try again.", "Better not tell you now.", "Don't count on it."];
  let currentAnswer = possibleAnswers[getRandomIntInclusive(0, possibleAnswers.length - 1)];

  while(currentAnswer === previousAnswer)
  {
    currentAnswer = possibleAnswers[getRandomIntInclusive(0, possibleAnswers.length - 1)];
  }

  previousAnswer = currentAnswer;

  makeAnswerAppear(currentAnswer);

  // Fun stuff ;)
  stopTimer();
  startTimer();
}

// Extra code I added for fun. It basically checks if the input has something the user wrote on it before running the answerQuestion function. No, I did not look this up, I did it myself and yes, I'm super proud :)

const clickable = document.getElementById("window");

clickable.addEventListener('click', () => {
  if (document.getElementById("question").value.length > 0) {
    answerQuestion();
  }
  else {
    alert("Please make a question...");
  }
});

// Also added this timeout function for fun which turns shows the 8 again, by reverse engineering the provided function, if the user doesn't click on the ball again in 10s.

let answerTimeout;

function startTimer() {
  answerTimeout = setTimeout(() => {
  
  document.getElementById("answer-text").classList.add("hidden");
  document.getElementById("triangle").classList.add("hidden");
  
  document.getElementById("eight").classList.remove("hidden");
}, 10000);
}

function stopTimer() {
  clearTimeout(answerTimeout);
}