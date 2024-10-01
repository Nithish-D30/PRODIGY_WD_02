let timer;

let startTime;

let running = false;

let lapCount = 0;



const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");

const stopBtn = document.getElementById("stopBtn");

const resetBtn = document.getElementById("resetBtn");

const lapBtn = document.getElementById("lapBtn");

const laps = document.getElementById("laps");



function updateDisplay() {

    const now = Date.now();

    const elapsedTime = now - startTime;

    

    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');

    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60).toString().padStart(2, '0');

    const seconds = Math.floor((elapsedTime / 1000) % 60).toString().padStart(2, '0');

    const milliseconds = Math.floor((elapsedTime % 1000)).toString().padStart(3, '0');



    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}



startBtn.addEventListener("click", () => {

    if (!running) {

        startTime = Date.now();

        timer = setInterval(updateDisplay, 10);

        running = true;

        startBtn.disabled = true;

        stopBtn.disabled = false;

    }

});



stopBtn.addEventListener("click", () => {

    clearInterval(timer);

    running = false;

    startBtn.disabled = false;

    stopBtn.disabled = true;

});



lapBtn.addEventListener("click", () => {

    if (running) {

        lapCount++;

        const lapTime = display.textContent;

        const lapItem = document.createElement("li");

        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;

        laps.appendChild(lapItem);

    }

});



resetBtn.addEventListener("click", () => {

    clearInterval(timer);

    running = false;

    startBtn.disabled = false;

    stopBtn.disabled = true;

    display.textContent = "00:00:00:000";

    laps.innerHTML = "";

    lapCount = 0;

});
