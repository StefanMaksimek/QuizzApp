
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
    return `
        <div class="card mb-2 answer-card"">
            <div class="card-body">
                Holy shit!!!
            </div>
        </div>
    `;
}