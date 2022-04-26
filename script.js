

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
    setProgressBar(i);

}


function setProgressBar(i) {
    let p = (i / questions.length * 100).toFixed(0);
    let bar = document.getElementById('progress-bar');

    bar.innerHTML = `${p}%`; 
    bar.style.width = `${p}%`; 
}


let SUCCESS_AUDIO = new Audio('./audio/success.mp3');
let FAIL_AUDIO = new Audio('./audio/fail.mp3');

function answer([i, x]) {
    let y = i + 1;
    submittedAnswers.push({
        "antwort": questions[i].answeres[x],
        "frage": questions[i].frage,
        "richtigeAntwort": questions[i].answeres[questions[i].lösung1]
    });
    if (questions[i].answeres[x] === questions[i].answeres[questions[i].lösung1]) {
        SUCCESS_AUDIO.play();
    } else {
        FAIL_AUDIO.play();
    }
    if (y < questions.length) {
        let currentQuestinon = i + 1;
        createCards(currentQuestinon);
    } else {
        proofAnswers();
    }

}


function proofAnswers() {
    let finishedCardHolder = document.getElementById('card-holder');

    finishedCardHolder.innerHTML = finishedCardHolderHTML();

    let proofedAnswers = document.getElementById('proofed-answers');
    submittedAnswers.forEach(function (proof) {
        let submittedAnswer = proof.antwort;
        let rightAnswer = proof.richtigeAntwort;
        let proofQuestion = proof.frage;

        proofedAnswers.innerHTML += createProofedAnswersHTML([submittedAnswer, rightAnswer, proofQuestion])
        if (submittedAnswer === rightAnswer) {
            rightAnswers.push(1)
        }
        setBgAnswer([submittedAnswer, rightAnswer, proofQuestion]);
    })
    document.getElementById('right-anwers').innerHTML = `${rightAnswers.length}`
    setFinishImg();
}


function setFinishImg() {
    let finishEmoticon = 'sniper.jpg';

    if (rightAnswers.length === questions.length) {
        finishEmoticon = 'emoticon-2-512.png';
    } else if (rightAnswers.length >= questions.length * 0.8) {
        finishEmoticon = 'emoticon-30-512.png';
    } else if (rightAnswers.length >= questions.length * 0.5) {
        finishEmoticon = 'emoticon-3-512.png';
    } else if (rightAnswers.length >= questions.length * 0.3) {
        finishEmoticon = 'emoticon-15-512.png';
    } else if (rightAnswers.length >= 0) {
        finishEmoticon = 'question-512.png';
    }
    document.getElementById('card-img-top').innerHTML = `
        <img src="./img/${finishEmoticon}" alt=""></img>
    `;
}


function setBgAnswer([a, b, c]) {
    if (a === b) {
        document.getElementById(c + a).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(c + a).parentNode.classList.add('bg-danger');
    }
}


function restart() {
    rightAnswers = [];
    submittedAnswers = [];
    startQuestion = 0;
    createCards(startQuestion)
}