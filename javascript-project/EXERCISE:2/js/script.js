const timeDisplay = document.getElementById('time');
const inputTime = document.getElementById('input-time');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

const hand = document.querySelector('.hand');

let timer;
let totalSeconds = 0;
let remainingSeconds = 0;


function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formattedMins = mins < 10 ? '0' + mins : mins;
  const formattedSecs = secs < 10 ? '0' + secs : secs;
  return formattedMins + ':' + formattedSecs;
}


function startTimer() {
  if (remainingSeconds <= 0) return;

  timer = setInterval(() => {
    remainingSeconds--;
    timeDisplay.innerText = formatTime(remainingSeconds);
    if (remainingSeconds <= 0){ 
      clearInterval(timer)
      resetTimer()
      alert("Time Finished")
    };
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  hand.style.transitionDuration = '0s';
  hand.style.transform = 'rotate(0deg)';
}


function resetTimer() {
  clearInterval(timer);
  remainingSeconds = null;
  timeDisplay.textContent = formatTime(null);
  hand.style.transitionDuration = '0s';
  hand.style.transform = 'rotate(0deg)';
}


playButton.addEventListener('click', () => {
  if (!remainingSeconds) {
    totalSeconds = parseInt(inputTime.value, ) || 0;
    remainingSeconds = totalSeconds;
    timeDisplay.textContent = formatTime(remainingSeconds);
    inputTime.value = "";
  }
  startTimer();
  hand.style.transitionDuration = `${totalSeconds}s`;
  hand.style.transform = 'rotate(360deg)';

});

pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
