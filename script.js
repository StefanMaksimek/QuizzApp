

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
    if (y < questions.length) {
        answers.push({ "antwort": questions[i].answeres[x], "frage": questions[i].frage })
        let currentQuestinon = i + 1;
        createCards(currentQuestinon);
    } else {
        let answerHolder = document.getElementById('answer-holder');
        answerHolder.innerHTML = endAnswer();
    }
}


function endAnswer() {
    
}


