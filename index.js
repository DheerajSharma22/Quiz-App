const data = [
  {
    question:
      "What historical event was Tchaikovsky&#039;s 1812 Overture referencing?",
    correct_answer: "d",
    options: [
      "The American War of 1812",
      "The Russian Revolution",
      "The Charge of the Light Brigade (Crimean War)",
      "The Napoleonic Wars",
    ],
  },
  {
    question: "In what year was the game &quot;Fallout&quot; released?",
    correct_answer: "a",
    options: ["1997", "1998", "1999", "1996"],
  },
  {
    question:
      "Final Fantasy VI was originally released outside Japan under what name?",
    correct_answer: "b",
    options: [
      "Final Fantasy VI",
      "Final Fantasy III",
      "Final Fantasy V",
      "Final Fantasy II",
    ],
  },
  {
    question:
      "When did the United States formally declare war on Japan, entering World War II?",
    correct_answer: "c",
    options: [
      "June 6, 1944",
      "June 22, 1941",
      "December 8, 1941",
      "September 1, 1939",
    ],
  },
  {
    question: "In South Park, what is Stan&#039;s surname?",
    correct_answer: "b",
    options: ["Stotch", "Marsh", "Broflovski", "Tweak"],
  },
  {
    question:
      "What genre of EDM is the Dutch DJ, musician, and remixer Armin van Buuren most well-known for?",
    correct_answer: "a",
    options: ["Trance", "House", "Drum and Bass", "Dubstep"],
  },
  {
    question:
      "What was the development code name for the &quot;Urza&#039;s Destiny&quot; expansion for &quot;Magic: The Gathering&quot;, released in 1999?",
    correct_answer: "d",
    options: ["Burrito", "Taquito", "Enchilada", "Chimichanga"],
  },
  {
    question: "EDM record label Monstercat is based in which country?",
    correct_answer: "b",
    options: ["United States", "Canada", "Australia", "United Kingdom"],
  },
  {
    question:
      "Which stage was planned to be a part of &quot;Sonic the Hedgehog 2&quot;, but was scrapped during development?",
    correct_answer: "a",
    options: [
      "Genocide City Zone",
      "Stardust Speedway Zone",
      "Sky High Zone ",
      "Clockwork Zone",
    ],
  },
  {
    question: "Which chemical element was originally known as Alabamine?",
    options: ["Selenium", "Antimony", "Astatine", "Molybdenum"],
    correct_answer: "c",
  },
];

let currQues = 1,
  score = 0,
  correctAns = "";

// Step 1.
const questionContent = document.getElementById("question");
const radioOptions = document.getElementsByClassName("options");
const questionNumber = document.getElementById("quesNo");
const container = document.querySelector(".container");
const resultContainer = document.querySelector(".resultContainer");
const wrapper = document.getElementById("wrapper");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const nextBtn = document.querySelector(".nextBtn");

// Step 2.
document.addEventListener("DOMContentLoaded", (e) =>
  showQuestion(data[currQues - 1])
);

function showQuestion(res) {
  if (currQues <= 10) {
    questionContent.textContent = res.question;
    const options = [option1, option2, option3, option4];
    const optionList = res.options;
    correctAns = res.correct_answer;

    questionNumber.textContent = `${currQues} out of 10 question.`;
    for (let i = 0; i < 4; i++) {
      options[i].textContent = optionList[i];
    }
  } else {
    container.style.display = "none";
    resultContainer.style.display = "block";
    result.textContent = score;
  }

  currQues++;
}

// Step 3 :- handle next btn
nextBtn.addEventListener("click", (e) => {
  let isChecked = false;
  Array.from(radioOptions).forEach((option) => {
    if (option.checked) isChecked = true;
  });

  if (!isChecked) {
    alert("Please select an option");
    return;
  }

  Array.from(radioOptions).forEach((option) => {
    if (option.checked) {
      if (option.id === correctAns) {
        wrapper.style.backgroundColor = "green";
        score++;
      } else {
        wrapper.style.backgroundColor = "red";
      }
    }
    option.checked = false;
  });
  setTimeout(() => {
    wrapper.style.backgroundColor = "#02aab0";
    showQuestion(data[currQues - 1]);
  }, 200);
});

playAgain.addEventListener("click", (e) => {
  currQues = 1;
  score = 0;
  resultContainer.style.display = "none";
  container.style.display = "block";
  showQuestion(data[currQues-1]);
});
