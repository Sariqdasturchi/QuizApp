const questions = [
    {
        questions: "JavaScript nima ?",
        answers: [
            {text: "bu interaktiv va dinamik veb saytlarni ishlab chiqish uchun foydalaniladi ", correct: true},
            {text: "web saytlarga jon berish ", correct: false},
            {text: "web saytga jilo berish uchun  ", correct: false},
            {text: "men buni bilmayman ", correct: false},
        ]
    },
    {
        questions: "JavaScript da nechta malumot turlari bor ?",
        answers: [
            {text: "7 ta ", correct: false},
            {text: "5 ta ", correct: false},
            {text: "1 ta ", correct: false},
            {text: "8 ta ", correct: true},
        ]
    },
    {
        questions: "JavaScript da nech xil funksiya boor ?",
        answers: [
            {text: "7 ta ", correct: false},
            {text: "5 ta ", correct: false},
            {text: "3 ta ", correct: true},
            {text: "8 ta ", correct: false},
        ]
    },
    {
        questions: " function myFunc() {} funksiyaning qaysi turiga kiradi ?",
        answers: [
            {text: "Arrow function ", correct: false},
            {text: "Decloration", correct: true},
            {text: "Bilmayman", correct: false},
            {text: "Bunaqasi yuq", correct: false},
        ]
    },
    {
        questions: " const myFunc = () => {} funksiyaning qaysi turiga kiradi ?",
        answers: [
            {text: "Arrow function ", correct: true},
            {text: "Bilmayman", correct: false},
            {text: "Decloration", correct: false},
            {text: "Bunaqasi yuq", correct: false},
        ]
    },
    {
        questions: "Shart operatorlarini sanang ?",
        answers: [
            {text: "while, if, do while ", correct: false},
            {text: "if ,else, while, do while", correct: false},
            {text: "for, do while, swetch", correct: false},
            {text: "if, else, while", correct: true},
        ]
    },
    {
        questions: "Massivlar da push() metodi nima vazifani bajaradi ?",
        answers: [
            {text: "massivga yangi object qo'shadi ", correct: false},
            {text: "massivga oxiridan yangi element qo'shadi", correct: true},
            {text: "massivga massiv qo'shadi", correct: false},
            {text: "hamma javob to'g'ri", correct: false},
        ]
    },
    {
        questions: "Massivlarda pop() metodi qanday vazifaga ega ?",
        answers: [
            {text: "oxirgi elementni o'chiradi", correct: false},
            {text: "massivning oxirgi elementini o'chirib beradi", correct: true},
            {text: "element qo'shadi", correct: false},
            {text: "bilmayman", correct: false},
        ]
    },
    {
        questions: "Massivlarda map() metodi ?",
        answers: [
            {text: "yangi massiv hosil qilib beradi", correct: true},
            {text: "massivni saralab beradi", correct: false},
            {text: "massiv izlaydi", correct: false},
            {text: "massivdagi elementni qidiradi", correct: false},
        ]
    },
    {
        questions: "ELementni tipini aniqlash uchun qaysi metoddan foydalanamiz ?",
        answers: [
            {text: "sizeOf", correct: false},
            {text: "type, typeOf", correct: false},
            {text: "toString", correct: false},
            {text: "typeOf", correct: true},
        ]
    },
    {
        questions: "React js nima ?",
        answers: [
            {text: "JavaScript kutubxonasi", correct: false},
            {text: "User interfeys", correct: false},
            {text: "Kutubxona", correct: false},
            {text: "React.js foydalanuvchi interfeyslarini yaratish uchun mashhur JavaScript kutubxonasidir.", correct: true},
        ]
    },
    {
        questions: "React js o'rnatish ketma ketligi ?",
        answers: [
            {text: "Yangi papka yaratib npm install react buyrug'idan foydalanish", correct: false},
            {text: "Yangi papka yaratib npm instal create-react-app buyrug'idan foydalanish", correct: false},
            {text: "Yangi papka yaratib npx create-react-app my-app buyrug'idan foydalanish", correct: false},
            {text: "Yangi papka yaratib Node js yuklab olib, terminalda npx create-react-app my-app buyrug'idan foydalanish", correct: true},
        ]
    },
    {
        questions: "React js da fayl sutrukturasi ?",
        answers: [
            {text: "Veb saytning har bir qismi uchun alohida component hosil qilish", correct: true},
            {text: "User interfeysdan foydalanish", correct: false},
            {text: "Kutubxona dan foydalanish", correct: false},
            {text: "Hamma javob to'g'ri", correct: false},
        ]
    },
    {
        questions: "React js da return vazifasi ?",
        answers: [
            {text: "Qiymat qaytarib berilmaydi", correct: false},
            {text: "Hosil qilgan funksiyada qiymat qaytarib beradi", correct: true},
            {text: "Kutubxona dan foydalanish", correct: false},
            {text: "Hamma javob to'g'ri", correct: false},
        ]
    },
    {
        questions: "React js da Voris olish uchun qaysi metoddan foydalanamiz ?",
        answers: [
            {text: "export", correct: false},
            {text: "export default App", correct: false},
            {text: "extends", correct: true},
            {text: "Hamma javob to'g'ri", correct: false},
        ]
    },
    {
        questions: "Class metodidan foydalanayotganimizda this kalit so'zining vazifasi nima ?",
        answers: [
            {text: "voris olish", correct: false},
            {text: "aynan mana shu elementdan voris olish", correct: false},
            {text: "aynan shu element emas", correct: false},
            {text: "aynan shu element", correct: true},
        ]
    },
    {
        questions: "Class komponentida hodisalar?",
        answers: [
            {text: "state, setState", correct: true},
            {text: "event", correct: false},
            {text: "state", correct: false},
            {text: "setState", correct: false},
        ]
    },
    {
        questions: "React js da Bootstrap ni yuklash uchun qanday buyrug' ishlatiladi ?",
        answers: [
            {text: "npx install bootstrap-react", correct: false},
            {text: "npm install bootstrap-react", correct: true},
            {text: "npx create-react-bootstrap", correct: false},
            {text: "Hamma javob to'g'ri", correct: false},
        ]
    },
    {
        questions: "React js da Antd design ni yuklab olish uchun qanday buyrug'dan foydalanamiz ?",
        answers: [
            {text: "npx install antd-react", correct: false},
            {text: "npm install antd-react", correct: false},
            {text: "npm install antd", correct: true},
            {text: "Hamma javob to'g'ri", correct: false},
        ]
    },
    {
        questions: "React js ni ishga tushurish uchun qanday buyrug'dan foydalaniladi ?",
        answers: [
            {text: "npx start", correct: false},
            {text: "npm react-start", correct: false},
            {text: "npm start", correct: true},
            {text: "npx react-start", correct: false},
        ]
    },
]


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let correntQuestionIndex = 0;
let score = 0;

function startQuiz() {
    correntQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Keyingisi";
    showQuestion();
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[correntQuestionIndex];
    let questionNo = correntQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.questions;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect) {
        selectBtn.classList.add("correct");
        score ++;
    }
    else {
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
        nextButton.style.display = "block"
    })
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Siz test savollaridan ${questions.length} dan ${score} `;
    nextButton.innerHTML = "Qayta boshlash";
    nextButton.style.display = "block";
}

function handleNextButton() {
    correntQuestionIndex ++;
    if(correntQuestionIndex < questions.length) {
        showQuestion()
    }
    else {
        showScore()
    }
}

nextButton.addEventListener("click", () => {
    if(correntQuestionIndex < questions.length) {
        handleNextButton()
    }
    else {
        startQuiz();
    }
})

startQuiz()