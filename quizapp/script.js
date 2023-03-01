const newArray = [1, "text", {} ];
const newArray2 = new Array()
const newObject =Object.assign({}, {question: " sadas",a: "Bucuresti"});
const quizData = [
    {
        question: "Care este capitala României?",
        a: "Brașov",
        b: "Constanța",
        c: "Oradea",
        d: "București",
        correct: "d",
    },
    {
        question: "Cine este președintele României?",
        a: "Florin Pop",
        b: "Klaus Iohannis",
        c: "Nicolae Ceașescu",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "Când are loc mare unire?",
        a: "1 dec. 1918",
        b: "12 feb. 2002",
        c: "10 aug. 1804",
        d: "20 iul. 1889",
        correct: "a",
    },
    {
        question: "Când a atins România apogeul maxim?",
        a: "1940",
        b: "1980",
        c: "1989",
        d: "1901",
        correct: "b",
    },
    {
        question: "Ce suprafață are România?",
        a: "238.397 km²",
        b: "345.676km²",
        c: "34.555km²",
        d: "12.99km²",
        corect: "a",
    },
    {
        question: "Care este populația României?",
        a: "22 milioane",
        b: "10 milioane",
        c: "15 milioane",
        d: "18 milioane",
        correct: "a",
    },
];
console.log(newObject, quizData[0].question);
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected() {
    let answer = undefined;
answerEls.forEach();
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Ai răspuns corect la ${score}/${quizData.length} întrebări.</h2>
                
                <button onclick="location.reload()">Reincarca</button>
            `;
        }
    }
});