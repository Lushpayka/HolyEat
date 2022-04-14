const timer = document.querySelector(".timer__time");
let interval
let deadLine = '1 september 2022';

function updateBlock() {
    const date = new Date().getTime();
    const dateNew = new Date(deadLine).getTime();
    const timeRemering = (dateNew - date) / 1000;
    const hours = Math.floor(timeRemering / 60 / 60);
    const minutes = Math.floor((timeRemering / 60) % 60);
    const seconds = Math.floor((timeRemering) % 60);
    const fHours = hours < 10 ? '0' + hours : hours;
    const fMinutes = minutes < 10 ? '0' + minutes : minutes;
    const fSeconds = seconds < 10 ? '0' + seconds : seconds;
    timer.textContent = `${fHours}:${fMinutes}:${fSeconds}`;
    if(timeRemering <= 0) {
        clearInterval();
        timer.textContent = `00:00:00`;
    }
}
updateBlock()
interval = setInterval(updateBlock, 500);