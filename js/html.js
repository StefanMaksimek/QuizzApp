
function cardHolderHTML([q, a1, a2, a3, a4, currentQuestion]) {
    let i = currentQuestion + 1;
    return `
        <div class="card main-card">
            <img src="./img/cardheader.png" class="card-img-top">
            
            <div class="card-body">
            
                <h5 class="card-title mb-3">
                    ${q}
                </h5>

                <div class="card mb-2 answer-card" onlclick="answer([${a1}, ${currentQuestion}])">
                    <div class="card-body">
                        ${a1}
                    </div>
                </div>

                <div class="card mb-2 answer-card" onlclick="answer([${a2}, ${currentQuestion}])">
                    <div class="card-body">
                        ${a2}
                    </div>
                </div>

                <div class="card mb-2 answer-card" onlclick="answer([${a3}, ${currentQuestion}])">
                    <div class="card-body">
                        ${a3}
                    </div>
                </div>

                <div class="card mb-2 answer-card" onlclick="answer([${a4}, ${currentQuestion}])">
                    <div class="card-body">
                        ${a4}
                    </div>
                </div>

                <div class="card-footer">
                    <div class="progress">
                        <span>${i}</span>
                        /
                        <span><b>${questions.length}</b></span>
                    </div>

                    <button class="btn btn-primary">SKIP</button>
                </div>
            </div>
        </div>
    `;
}