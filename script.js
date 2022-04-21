let questions = [
    {
        "frage": "Frage 1",
        "antwort1": "antwort1antwort1",
        "antwort2": "antwort1antwort1",
        "antwort3": "antwort1antwort1",
        "antwort4": "antwort1antwort1",
        "lösung1": "2"
    },
    {
        "frage": "Frage 2",
        "antwort1": "antwort1antwort1",
        "antwort2": "antwort1antwort1",
        "antwort3": "antwort1antwort1",
        "antwort4": "antwort1antwort1",
        "lösung1": "2"
    },
    {
        "frage": "Frage 3",
        "antwort1": "antwort1antwort1",
        "antwort2": "antwort1antwort1",
        "antwort3": "antwort1antwort1",
        "antwort4": "antwort1antwort1",
        "lösung1": "2"
    },
    {
        "frage": "Frage 4",
        "antwort1": "antwort1antwort1",
        "antwort2": "antwort1antwort1",
        "antwort3": "antwort1antwort1",
        "antwort4": "antwort1antwort1",
        "lösung1": "2"
    },
    {
        "frage": "Frage 5",
        "antwort1": "antwort1antwort1",
        "antwort2": "antwort1antwort1",
        "antwort3": "antwort1antwort1",
        "antwort4": "antwort1antwort1",
        "lösung1": "2"
    },
    {
        "frage": "Frage 6",
        "antwort1": "antwort1antwort1",
        "antwort2": "antwort1antwort1",
        "antwort3": "antwort1antwort1",
        "antwort4": "antwort1antwort1",
        "lösung1": "2"
    },
    {
        "frage": "Frage 7",
        "antwort1": "antwort1antwort1",
        "antwort2": "antwort1antwort1",
        "antwort3": "antwort1antwort1",
        "antwort4": "antwort1antwort1",
        "lösung1": "2"
    },
    {
        "frage": "Frage 8",
        "antwort1": "antwort1antwort1",
        "antwort2": "antwort1antwort1",
        "antwort3": "antwort1antwort1",
        "antwort4": "antwort1antwort1",
        "lösung1": "2"
    },
    {
        "frage": "Frage 9",
        "antwort1": "antwort1antwort1",
        "antwort2": "antwort1antwort1",
        "antwort3": "antwort1antwort1",
        "antwort4": "antwort1antwort1",
        "lösung1": "2"
    },
    {
        "frage": "Frage 10",
        "antwort1": "antwort1antwort1",
        "antwort2": "antwort1antwort1",
        "antwort3": "antwort1antwort1",
        "antwort4": "antwort1antwort1",
        "lösung1": "2"
    }
]

let answers = [];

let startQuestion = 0;

function init(i) {
    createCards(i)
}


function createCards(i) {
    let currentQuestion = i;
    let q = questions[currentQuestion].frage;
    let a1 = questions[currentQuestion].antwort1;
    let a2 = questions[currentQuestion].antwort2;
    let a3 = questions[currentQuestion].antwort3;
    let a4 = questions[currentQuestion].antwort4;

    let cardHolder = document.getElementById('card-holder');

    cardHolder.innerHTML = ``;
    cardHolder.innerHTML += cardHolderHTML([q, a1, a2, a3, a4, currentQuestion]);
}


function answer([i, y]) {
    answers.push({"question": y, "answer": i});
    let x = startQuestion + 1;
    startQuestion = x;
    createCards(startQuestion);
}