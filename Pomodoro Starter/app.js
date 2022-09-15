let time = 1500000;
let cancelId = null;
let timerStarted = null;
function startTimer() {
  timerStarted = Date.now();
  console.log("timerStarted");
  cancelId = requestAnimationFrame(updateTimer);
}
function stopTimer() {
  console.log("timerStoped");
  time = time - (Date.now() - timerStarted);
  cancelAnimationFrame(cancelId);
}
function resetTimer() {
  console.log("timerReseted");
  time = 1500000;
  cancelAnimationFrame(cancelId);
  document.querySelector(".timer__minutes").innerHTML = "25";
  document.querySelector(".timer__seconds").innerHTML = "00";
  document.querySelector(".timer__milliseconds").innerHTML = "000";
}
function updateTimer() {
  const countdownTime = timerStarted + time;
  const timer = new Date(countdownTime - Date.now());
  timerMilliseconds = timer.getMilliseconds();
  timerSeconds = timer.getSeconds();
  timerMinutes = timer.getMinutes();
  document.querySelector(".timer__minutes").innerHTML =
    timerMinutes < 10 ? "0" + timerMinutes : timerMinutes;
  document.querySelector(".timer__seconds").innerHTML =
    timerSeconds < 10 ? "0" + timerSeconds : timerSeconds;
  const millisecondsHtml =
    timerMilliseconds < 100
      ? timerMilliseconds < 10
        ? "00" + timerMilliseconds
        : "0" + timerMilliseconds
      : timerMilliseconds;
  document.querySelector(".timer__milliseconds").innerHTML = millisecondsHtml;
  cancelId = requestAnimationFrame(updateTimer);
  if (timer.getTime() <= 0) {
    cancelAnimationFrame(cancelId);
    document.querySelector(".timer__minutes").innerHTML = "00";
    document.querySelector(".timer__seconds").innerHTML = "00";
    document.querySelector(".timer__milliseconds").innerHTML = "000";
  }
}
