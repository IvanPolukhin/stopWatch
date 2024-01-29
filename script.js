let startTime;
let elapsedTime = 0;
let timerInterval;

function printTime() {
    let milliseconds = elapsedTime % 1000;
    let totalSeconds = Math.floor(elapsedTime / 1000);
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);
    document.getElementById("timer").innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}:${milliseconds < 10 ? "00" : milliseconds < 100 ? "0" : ""}${milliseconds}`;
}

function startTimer() {
    let now = Date.now();
    startTime = now - elapsedTime;
    timerInterval = setInterval(function() {
        let now = Date.now();
        elapsedTime = now - startTime;
        printTime();
    }, 10);
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