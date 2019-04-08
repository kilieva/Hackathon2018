const timerDisplay = document.querySelector('.time-left');
const dayDisplay = document.querySelector('.day');
const hourDisplay = document.querySelector('.hour');
const minuteDisplay = document.querySelector('.minute');
const secondDisplay = document.querySelector('.second');
const endTime = document.querySelector('.end-time');

const countDownDate = new Date("APR 20, 2018 16:20:00").getTime();

let a = 0;
// Starts counter update every second
var x = setInterval(function() {
 
  var now = new Date().getTime(); // current date

  // Time between now and the countdown date
  var time = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const months = Math.floor(time / (1000 * 60 * 60 * 24));
  var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);
  
  if (time > 0 ) {
    dayDisplay.innerHTML = days;
    hourDisplay.innerHTML = hours;
    minuteDisplay.innerHTML = minutes;
    secondDisplay.innerHTML = seconds;  
  }

  // Triggers if countdown has finished and sets timer to 0;
  else {
    clearInterval(x);
    endTime.innerHTML = "Start Timer!";
    dayDisplay.innerHTML = 0;
    hourDisplay.innerHTML = 0;
    minuteDisplay.innerHTML = 0;
    secondDisplay.innerHTML = 0;
  }
}, 32);