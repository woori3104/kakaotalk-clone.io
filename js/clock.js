const clockContainer = document.querySelector(".sttust-bar__clock");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockContainer.innerText = `${hours<10 ?`0${hours}`:hours}:${minutes<10 ?`0${minutes}`:minutes}`;
}

function init() {
    
    getTime();
    setInterval(getTime,1000);
}

init();