let startTime;
let elapsedTime = 0;
let timerInterval;

function printTime() {
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime - minutes * 60;
    document.getElementById("timer").innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printElapsedTime() {
        elapsedTime = Date.now() - startTime;
        printTime();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    printTime();
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);