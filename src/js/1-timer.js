const startBtn = document.querySelector('button');
const inputDate = document.querySelector('#datetime-picker');
const daysCalc = document.querySelector('.value[data-days]');
const hoursCalc = document.querySelector('.value[data-hours]');
const minutesCalc = document.querySelector('.value[data-minutes]');
const secondsCalc = document.querySelector('.value[data-seconds]');

function updateClockfase({ days, hours, minutes, seconds }) {
  secondsCalc.textContent = `${seconds}`;
  minutesCalc.textContent = `${minutes}`;
  hoursCalc.textContent = `${hours}`;
  daysCalc.textContent = `${days}`;
}

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
let userSelectedDate;
startBtn.setAttribute('disabled', '');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const dateNow = new Date();

    if (selectedDates[0] < dateNow) {
      iziToast.show({
        message: 'Please choose a date in the future',
        messageColor: '#ffffff',
        messageSize: '16px',
        messageLineHeight: '1.5',
        backgroundColor: '#ef4040',
        position: 'topRight',
        closeOnEscape: true,
      });
    } else {
      startBtn.removeAttribute('disabled');
      userSelectedDate = selectedDates[0];
    }
    // console.log(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);
let intervalId = null;

startBtn.addEventListener('click', handelClick);

function handelClick() {
  const getDate = userSelectedDate.getTime();
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const deltaTime = getDate - currentTime;
    if (deltaTime > 0) {
      startBtn.setAttribute('disabled', '');
      inputDate.setAttribute('disabled', '');
      const time = convertMs(deltaTime);
      updateClockfase(time);
    } else {
      clearInterval(intervalId);
      inputDate.removeAttribute('disabled');
      return;
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
