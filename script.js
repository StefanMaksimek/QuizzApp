

let startQuestion = 0;

function init(i) {
    createCards(i)
}


function createCards(i) {
    let img = questions[i].img
    let cardHolder = document.getElementById('card-holder');

    cardHolder.innerHTML = ``;
    cardHolder.innerHTML += cardHolderHTML(i);
    document.getElementById('card-img-top').innerHTML = `
    <img src="${img}" class="card-img-top">
    `;
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
    submittedAnswers.push({
        "antwort": questions[i].answeres[x],
        "frage": questions[i].frage,
        "richtigeAntwort": questions[i].answeres[questions[i].lösung1]
    });
    if (y < questions.length) {
        let currentQuestinon = i + 1;
        createCards(currentQuestinon);
    } else {
        proofAnswers();
    }
    
}


function proofAnswers() {
    let rightAnswers = [];
    let finishedCardHolder = document.getElementById('card-holder');
    
    finishedCardHolder.innerHTML = finishedCardHolderHTML()

    let proofedAnswers = document.getElementById('proofed-answers');
    submittedAnswers.forEach(function (proof) {
        let submittedAnswer = proof.antwort;
        let rightAnswer = proof.richtigeAntwort;
        let proofQuestion = proof.frage;
        
        proofedAnswers.innerHTML += createProofedAnswersHTML([submittedAnswer, rightAnswer, proofQuestion])
        if(submittedAnswer === rightAnswer) {
            rightAnswers.push(1)
        }
    })
    document.getElementById('right-anwers').innerHTML = `${rightAnswers.length}`
}


function restart() {
    rightAnswers = [];
    submittedAnswers = [];
    startQuestion = 0;
    createCards(startQuestion)
}