let questions = [
    {
        "frage": "Frage 1",
        "answeres": ["antwort1antwort1", "antwort2antwort2", "antwort3antwort3", "antwort4antwort4"],
        "lösung1": "2"
    },
    {
        "frage": "Frage 2",
        "answeres": ["antwort1antwort1", "antwort2antwort2", "antwort3antwort3", "antwort4antwort4"],
        "lösung1": "2"
    },
    {
        "frage": "Frage 3",
        "answeres": ["antwort1antwort1", "antwort2antwort2", "antwort3antwort3", "antwort4antwort4"],
        "lösung1": "2"
    },
    {
        "frage": "Frage 4",
        "answeres": ["antwort1antwort1", "antwort2antwort2", "antwort3antwort3", "antwort4antwort4"],
        "lösung1": "2"
    },
    {
        "frage": "Frage 5",
        "answeres": ["antwort1antwort1", "antwort2antwort2", "antwort3antwort3", "antwort4antwort4"],
        "lösung1": "2"
    },
    {
        "frage": "Frage 6",
        "answeres": ["antwort1antwort1", "antwort2antwort2", "antwort3antwort3", "antwort4antwort4"],
        "lösung1": "2"
    },
    {
        "frage": "Frage 7",
        "answeres": ["antwort1antwort1", "antwort2antwort2", "antwort3antwort3", "antwort4antwort4"],
        "lösung1": "2"
    },
    {
        "frage": "Frage 8",
        "answeres": ["antwort1antwort1", "antwort2antwort2", "antwort3antwort3", "antwort4antwort4"],
        "lösung1": "2"
    },
    {
        "frage": "Frage 9",
        "answeres": ["antwort1antwort1", "antwort2antwort2", "antwort3antwort3", "antwort4antwort4"],
        "lösung1": "2"
    },
    {
        "frage": "Frage 10",
        "answeres": ["antwort1antwort1", "antwort2antwort2", "antwort3antwort3", "antwort4antwort4"],
        "lösung1": "2"
    }
];
let answers = [];

let startQuestion = 0;

function init(i) {
    createCards(i)
}


function createCards(i) {
    let cardHolder = document.getElementById('card-holder');

    cardHolder.innerHTML = ``;
    cardHolder.innerHTML += cardHolderHTML(i);
    createAnswers(i);
}


function createAnswers(i) {
    let answerHolder = document.getElementById('answer-holder');
    answerHolder.innerHTML = ``;
    let y = 0;
    questions[i].answeres.forEach(a => {
        let x = a;
        answerHolder.innerHTML += answersHTML([i, x, y]);
        y++;
    });

}

function answer([i, x]) {
    let y = i + 1;
    if (y < questions.length) {
        answers.push({ "antwort": questions[i].answeres[x], "frage": questions[i].frage })
        let currentQuestinon = i + 1;
        createCards(currentQuestinon);
    } else {
        let answerHolder = document.getElementById('answer-holder');
        answerHolder.innerHTML = endAnswer();
    }
}


