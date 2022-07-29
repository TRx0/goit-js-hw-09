const btnStart = document.querySelector("[data-start]");
const btnStop = document.querySelector("[data-stop]");

btnStart.addEventListener(`click`, clickStart)
btnStop.addEventListener(`click`, clickStop)
let timerId = null;
let isActive = false;
function clickStart(){
    if (isActive = true){
        btnStart.setAttribute("disabled", "")
        btnStop.removeAttribute("disabled")
    }
    timerId = setInterval(getColor, 500)
    console.log("Старт!");
}
function clickStop() {
    if (isActive) {
        btnStart.removeAttribute("disabled");
    }
    btnStop.setAttribute("disabled", "");
    clearInterval(timerId);
    console.log("Стоп");
}

function getColor(){
    document.body.style.background = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }