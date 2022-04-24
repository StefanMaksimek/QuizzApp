
function cardHolderHTML(i) {
    let q = questions[i].frage;
    let y = i + 1;
    return `
        <div class="card main-card">
            <div class="card-img-top" id="card-img-top">

            </div>
            
            <div class="card-body">
            
                <h5 class="card-title mb-3">
                    ${q}
                </h5>

                <div class="answer-holder" id="answer-holder">
                     
                </div>

                <div class="card-footer">
                    <div class="progress">
                        <span>${y}</span>
                        /
                        <span><b>${questions.length}</b></span>
                    </div>

                    <button class="btn btn-primary">SKIP</button>
                </div>
            </div>
        </div>
    `;
}


function answersHTML([i, x, y]) {
    return `
        <div class="card mb-2 answer-card" onclick="answer([${i}, ${y}])">
            <div class="card-body">
                ${x}
            </div>
        </div>
    `;
}


function endAnswer() {
    proofAnsweres();
    return `
        <div class="card mb-2 answer-card"">
            <div class="card-body">
                Holy shit!!!
            </div>
        </div>
    `;
}


function finishedCardHolderHTML() {
    return `
        <div class="card main-card">
            <div class="card-img-top" id="card-img-top">
                <img src="./img/emoticon-2-512.png" alt="">
            </div>

            <div class="card-body">
                <div class="evaluation-card" id="proofed-answers">
                    
                </div>

                <div class="card-footer">
                    <div class="progress">
                        <span id="right-anwers">1 </span> / <span> 10</span> Richtig
                    </div>

                    <button class="btn btn-primary" onclick="restart()">Neustart</button>
                </div>
            </div>
        </div>
    `;
}


function createProofedAnswersHTML([a, b, c]) {
    return `
        <div class="answer-head">
            <h5 class="card-title mb-3">${c}</h5>

            <h5 class="card-title mb-3">Richtige Antwort</h5>
         </div>
    
        <div class="proof-answer-holder" id="proof-answer-holder">
            <div class="card mb-2">
                <div class="card-body">
                    ${a}
                </div>
            </div>

            <div class="card mb-2">
                <div class="card-body">
                    ${b}
                </div>
            </div>
        </div>
    `;
}