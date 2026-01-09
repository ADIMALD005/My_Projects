const quizData = [
  {
    question: "Identify the noun in this sentence: 'The cat sleeps on the mat.'",
    options: ["sleeps", "cat", "on", "the"],
    correct: 2
  },
  {
    question: "What part of speech is the word 'quickly' in: 'She runs quickly'?",
    options: ["Noun", "Verb", "Adverb", "Adjective"],
    correct: 3
  },
  {
    question: "Identify the adjective: 'The beautiful flower bloomed yesterday.'",
    options: ["flower", "beautiful", "bloomed", "yesterday"],
    correct: 2
  },
  {
    question: "Which word is a conjunction? 'I wanted to go, but it was raining.'",
    options: ["wanted", "but", "it", "raining"],
    correct: 2
  },
  {
    question: "Which sentence is in present continuous tense?",
    options: ["I eat breakfast", "I am eating breakfast", "I ate breakfast", "I will eat breakfast"],
    correct: 2
  },
  {
    question: "Identify the tense: 'She walked to school yesterday.'",
    options: ["Present tense", "Past tense", "Future tense", "Present perfect"],
    correct: 2
  },
  {
    question: "Which sentence uses the future tense correctly?",
    options: ["I go to the market tomorrow", "I will go to the market tomorrow", "I went to the market tomorrow", "I am going to the market yesterday"],
    correct: 2
  },
  {
    question: "Which sentence is in present perfect tense?",
    options: ["I have finished my homework", "I finished my homework", "I am finishing my homework", "I will finish my homework"],
    correct: 1
  },
  {
    question: "Choose the correct verb: 'The dog ___ barking.'",
    options: ["am", "is", "are", "be"],
    correct: 2
  },
  {
    question: "Which sentence has correct subject-verb agreement?",
    options: ["The boys plays football", "The boys play football", "The boy play football", "The boys is playing football"],
    correct: 2
  },
  {
    question: "Choose the correct verb: 'Either the teacher or the students ___ responsible.'",
    options: ["is", "are", "was", "been"],
    correct: 2
  },
  {
    question: "Fill in the blank: '___ apple a day keeps the doctor away.'",
    options: ["A", "An", "The", "No article needed"],
    correct: 2
  },
  {
    question: "Choose the correct article: 'She is ___ honest girl.'",
    options: ["a", "an", "the", "no article"],
    correct: 2
  },
  {
    question: "Which sentence uses articles correctly?",
    options: ["I saw a elephant", "I saw an elephant", "I saw the a elephant", "I saw elephant"],
    correct: 2
  },
  {
    question: "Replace with a pronoun: 'Mary went to Mary's house.'",
    options: ["Mary went to his house", "Mary went to her house", "Mary went to their house", "Mary went to its house"],
    correct: 2
  }
];

let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0; 
let timer;
let timeLeft;

const questionEl = document.getElementById("questions");
const OptionsEL = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEl = document.getElementById("timer");
const resultEl = document.getElementById("result");

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 15; 
    updateTimer(); 
    timer = setInterval(countdown, 1000);
    const q = questions[currentQuestion];
    questionEl.textContent = `Q${currentQuestion + 1}. ${q.question}`;
    OptionsEL.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = option;
        btn.addEventListener("click", () => selectAnswer(index, true));
        OptionsEL.appendChild(btn);
    });

    nextBtn.style.display = "none";

    function countdown() {
       timeLeft--;
       updateTimer();
       if (timeLeft === 0) {
        clearInterval(timer);
        selectAnswer(questions[currentQuestion]?.correct , false)
       }
    }

    function updateTimer() {
        timerEl.textContent = `🕟${timeLeft}`
    }
}

function selectAnswer(index, shouldScore) {
    clearInterval(timer);
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach(btn => btn.disabled = true);

    if (index === q.correct) {
       shouldScore && score++;
       buttons[index].classList.add("correct");
    }
    else{
        buttons[index].classList.add("wrong");
        buttons[q.correct].classList.add("correct");
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if(currentQuestion < questions.length) {
        loadQuestion();
    }
    else {
        showResult();
    }
});

function showResult() {
    nextBtn.style.display = "none";
    const highScore = localStorage.getItem("quizHighScore") || 0;

    const isNew = score > highScore;

    if(isNew) {
        localStorage.setItem("quizHighScore", score);
    }

    resultEl.innerHTML = `
        <h2>Hurray!!! Quiz Completed</h2>
        <p>You have scored ${score} out of ${questions.length} questions</p>
        <p>Highest score: ${Math.max(score, highScore)}</p>
        ${isNew ? "<p>Hey, New High score!</p>": ""}
        <button onclick = "location.reload()">Restart Quiz</button>
    `
}
loadQuestion();