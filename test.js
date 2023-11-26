const questionText = document.getElementById("question");
const questionNumber = document.getElementById("quesNo");
const options = document.getElementsByClassName("options");
const option1 = document.getElementById("optionText1");
const option2 = document.getElementById("optionText2");
const option3 = document.getElementById("optionText3");
const option4 = document.getElementById("optionText4");
const nextBtn = document.querySelector(".nextBtn");
const submitBtn = document.querySelector(".submitBtn");

let currQues = 0,
  totalQues = 10,
  score = 0,
  correctAns = "";

document.addEventListener("DOMContentLoaded", () => fetchQuestion());
async function fetchQuestion() {
  try {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=1&type=multiple"
    );
    const { results } = await res.json();
    showQuestion(results[0]);
  } catch (error) {
    console.log("Something went wrong...");
  }
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function showQuestion(data) {
  currQues++;
  const { question, correct_answer, incorrect_answers } = data;
  let optionList = [...incorrect_answers, correct_answer];
  let optionArr = [option1, option2, option3, option4];

  correctAns = correct_answer;

  questionNumber.textContent = `Question Number : ${currQues}`;
  questionText.textContent = question;
  for (let i = 0; i < 4; i++) {
    optionArr[i].textContent = optionList[i];
    options[i].setAttribute("answer", optionList[i]);
  }

  return false;
}

nextBtn.addEventListener("click", (e) => {
  if (currQues < 9) {
    fetchQuestion();
  }else if (currQues == 10) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
  }
  Array.from(options).forEach((option) => {
    if (option.checked) {
      if (option.getAttribute("answer") === correctAns) {
        score++;
      }
    }
  });
});
