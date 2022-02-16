(function () {
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  const countDownDate = new Date(new Date().getFullYear(), 11, 31).getTime();
  const Countdown = setInterval(function() {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;
    if (timeLeft < 0) {
      clearInterval(Countdown);
    }
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    daysElement.innerHTML= (days < 10) ? `0${days}` : days;
    hoursElement.innerHTML = ( hours < 10) ? `0${hours}` : hours;
    minutesElement.innerHTML = ( minutes < 10) ? `0${minutes}` : minutes;
    secondsElement.innerHTML = (seconds < 10) ? `0${seconds}` : seconds;
  }, 1000);
})();