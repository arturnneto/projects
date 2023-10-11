const questions = [
    {
        question: "What is the engine code for the BMW M3 E36?",
        answers: [
            { text: "M52B28", correct: false},
            { text: "S50B30", correct: true},
            { text: "S54B32", correct: false},
            { text: "S14B25", correct: false}
        ]
    },
    {
        question: "How many cilinders does the M3 E30 have?",
        answers: [
            { text: "6", correct: false},
            { text: "8", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false}
        ]
    },
    {
        question: "Where is the radiator of the VW Beetle placed?",
        answers: [
            { text: "Front bumper", correct: false},
            { text: "Rear bumper", correct: false},
            { text: "Behind the front wheel", correct: false},
            { text: "None of the above", correct: true}
        ]
    },
    {
        question: "What japonese sports car is often associated with the legendary brazilian driver Ayrton Senna?",
        answers: [
            { text: "Honda NSX", correct: true},
            { text: "Mazda RX7", correct: false},
            { text: "Nissan Silvia S14", correct: false},
            { text: "Subaru Impreza WRX STI", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        };
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    };

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();