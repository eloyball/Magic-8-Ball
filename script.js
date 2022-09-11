
function makeAnswerAppear(answerText) {
  // Adds "hidden" CSS class to the '8'.
  document.getElementById("eight").classList.add("hidden");

  // Find the answer element, change the text, and remove the CSS "hidden" class.
  document.getElementById("answer-text").innerText = answerText;

  document.getElementById("answer-text").classList.add("hidden");
  document.getElementById("triangle").classList.add("hidden");

  // Allow 1/1000th of a second to pass in order for the above changes to take effect.  Then remove the elements
  setTimeout(() => {
    document.getElementById("answer-text").classList.remove("hidden");
    document.getElementById("triangle").classList.remove("hidden");
  }, 1);
}

function getRandomIntInclusive(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNum;
}

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

  stopTimer();
  startTimer();
}

// Check if user has made a question
const clickable = document.getElementById("window");

clickable.addEventListener('click', () => {
  if (document.getElementById("question").value.length > 0) {
    answerQuestion();
  }
  else {
    alert("Please make a question...");
  }
});

// Allow magic ball timeout
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