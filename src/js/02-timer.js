import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  btnStart: document.querySelector("[data-start]"),
  days: document.querySelector("[data-days]"),
  hours: document.querySelector("[data-hours]"),
  minutes: document.querySelector("[data-minutes]"),
  seconds: document.querySelector("[data-seconds]"),
}

const disabledBtn = refs.btnStart.setAttribute("disabled", "");   
const currentTime = Date.now();

const timerCalendar = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose,
});

function onClose(selectedDates) {
  if (currentTime > selectedDates[0]) {
    return alert("Please choose a date in the future");
  };
  refs.btnStart.removeAttribute("disabled");
 

  const countdown = {
  interval: null,
  isActive: false,
  start() {
    if (this.isActive){
        return;
    }
    this.isActive = true;
    refs.btnStart.setAttribute("disabled", ""); 
    this.interval = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = selectedDates[0] - currentTime;
    const time = convertMs(deltaTime);
      changeClock(time);
      if (deltaTime < 0) {
        clearInterval(this.interval);
        const time = convertMs(0);
        changeClock(time);
      }
      }, 1000);
  },
};
  refs.btnStart.addEventListener("click", countdown.start);
  console.log(selectedDates[0]);
};

function changeClock({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}