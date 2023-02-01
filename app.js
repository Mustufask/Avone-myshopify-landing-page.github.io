//Variables to store all values with dom manipulation
const days = document.getElementById('days');
const hours = document.getElementById('hrs');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');

//Inbuilt javascript date function
const currentYear = new Date().getFullYear()

const newCountTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

//Update countdown time
function updateCountdownTime() {
    const currentTime = new Date();
    const diff = newCountTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

//Calling the function with interval of 1 second
setInterval(updateCountdownTime, 1000);