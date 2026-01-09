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
  },
  {
    question: "Choose the correct pronoun: 'John and ___ are going to the park.'",
    options: ["me", "I", "myself", "mine"],
    correct: 2
  },
  {
    question: "Which pronoun is reflexive?",
    options: ["he", "him", "himself", "his"],
    correct: 3
  },
  {
    question: "Choose the correct preposition: 'The book is ___ the table.'",
    options: ["in", "on", "at", "by"],
    correct: 2
  },
  {
    question: "Fill in the blank: 'She is good ___ mathematics.'",
    options: ["in", "at", "on", "with"],
    correct: 2
  },
  {
    question: "Choose the correct preposition: 'The meeting is ___ 3 PM ___ Monday.'",
    options: ["on, at", "at, on", "in, at", "at, in"],
    correct: 2
  },
  {
    question: "Which sentence is punctuated correctly?",
    options: ["What is your name.", "What is your name?", "What is your name!", "what is your name"],
    correct: 2
  },
  {
    question: "Where should the comma go? 'Before we leave we should pack our bags.'",
    options: ["Before we leave, we should pack our bags.", "Before, we leave we should pack our bags.", "Before we, leave we should pack our bags.", "No comma needed"],
    correct: 1
  },
  {
    question: "Which sentence uses apostrophes correctly?",
    options: ["The dogs tail", "The dog's tail", "The dogs' tail", "The dog tail's"],
    correct: 2
  },
  {
    question: "Which is a complete sentence?",
    options: ["Running in the park", "The boy runs", "After school", "Because it was raining"],
    correct: 2
  },
  {
    question: "Identify the sentence type: 'Go to bed now!'",
    options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
    correct: 3
  },
  {
    question: "Which is a compound sentence?",
    options: ["I like tea", "I like tea and coffee", "I like tea, but she likes coffee", "Because I like tea"],
    correct: 3
  },
  {
    question: "Convert to passive voice: 'The teacher teaches the students.'",
    options: ["The students teach the teacher", "The students are taught by the teacher", "The students were taught by the teacher", "The teacher is taught by students"],
    correct: 2
  },
  {
    question: "Which sentence is in active voice?",
    options: ["The cake was eaten by Mary", "The cake is being eaten", "Mary ate the cake", "The cake has been eaten"],
    correct: 3
  },
  {
    question: "Convert to indirect speech: He said, 'I am happy.'",
    options: ["He said that I am happy", "He said that he was happy", "He said that he is happy", "He said he am happy"],
    correct: 2
  },
  {
    question: "Convert to direct speech: She asked if I could help her.",
    options: ["She said, 'Can you help me?'", "She said, 'Could you help me?'", "She asked, 'Can I help you?'", "She asked, 'You can help me?'"],
    correct: 2
  },
  {
    question: "What is the verb in this sentence: 'The children play in the garden'?",
    options: ["children", "play", "garden", "the"],
    correct: 2
  },
  {
    question: "Which sentence is in past continuous tense?",
    options: ["I was reading a book", "I read a book", "I have read a book", "I will read a book"],
    correct: 1
  },
  {
    question: "Choose the correct verb: 'Neither the cats nor the dog ___ in the house.'",
    options: ["is", "are", "was", "were"],
    correct: 1
  },
  {
    question: "Fill in the blank: 'She plays ___ piano beautifully.'",
    options: ["a", "an", "the", "no article"],
    correct: 3
  },
  {
    question: "Which is a possessive pronoun?",
    options: ["he", "him", "his", "himself"],
    correct: 3
  },
  {
    question: "Choose the correct preposition: 'She has been waiting ___ two hours.'",
    options: ["since", "for", "from", "at"],
    correct: 2
  },
  {
    question: "Which sentence needs a semicolon?",
    options: ["I like tea; she likes coffee", "I like tea, and she likes coffee", "I like tea but she likes coffee", "I like tea or she likes coffee"],
    correct: 1
  },
  {
    question: "Identify the complex sentence:",
    options: ["I went home", "I went home and slept", "I went home because I was tired", "I went home; I was tired"],
    correct: 3
  },
  {
    question: "Which sentence uses past perfect correctly?",
    options: ["She has eaten before I arrived", "She had eaten before I arrived", "She ate before I arrived", "She was eating before I arrived"],
    correct: 2
  },
  {
    question: "What part of speech is 'through' in: 'We walked through the park'?",
    options: ["Noun", "Verb", "Preposition", "Adverb"],
    correct: 3
  },
  {
    question: "Convert to active voice: 'The letter was written by John.'",
    options: ["John writes the letter", "John wrote the letter", "John is writing the letter", "John has written the letter"],
    correct: 2
  },
  {
    question: "Choose the correct pronoun: 'Between you and ___, I think she's wrong.'",
    options: ["I", "me", "myself", "mine"],
    correct: 2
  },
  {
    question: "Choose the correct verb: 'She ___ to school every day.'",
    options: ["go", "goes", "going", "gone"],
    correct: 2
  },
  {
    question: "Which sentence uses quotation marks correctly?",
    options: ["He said I am tired", "He said, I am tired", "He said, \"I am tired.\"", "He said \"I am tired\""],
    correct: 3
  },
  {
    question: "Fill in the blank: 'There is ___ cat in the garden.'",
    options: ["a", "an", "the", "no article"],
    correct: 1
  },
  {
    question: "Which sentence is declarative?",
    options: ["What time is it?", "Come here!", "The sky is blue.", "How beautiful!"],
    correct: 3
  },
  {
    question: "Choose the correct preposition: 'The cat jumped ___ the box.'",
    options: ["into", "on", "at", "by"],
    correct: 1
  },
  {
    question: "Convert to indirect speech: She said, 'I will come tomorrow.'",
    options: ["She said she will come tomorrow", "She said she would come the next day", "She said she will come the next day", "She said I would come tomorrow"],
    correct: 2
  },
  {
    question: "Which is the future continuous tense?",
    options: ["I will go", "I am going", "I will be going"],
    correct: 3
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