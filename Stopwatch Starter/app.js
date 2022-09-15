let cancelId = null;
let startTime = null;
let resumeTime = 0;
function startTimer() {
  startTime = Date.now() - resumeTime;
  console.log(startTime);
  cancelId = requestAnimationFrame(updateTimer);
}
function stopTimer() {
  console.log("stopTimer");
  resumeTime = Date.now() - startTime;
  console.log(resumeTime);
  cancelAnimationFrame(cancelId);
}
function resetTimer() {
  console.log("resetTimer");
  startTime = null;
  resumeTime = null;
  cancelAnimationFrame(cancelId);
  document.querySelector(".timer__minutes").innerHTML = "00";
  document.querySelector(".timer__seconds").innerHTML = "00";
  document.querySelector(".timer__milliseconds").innerHTML = "000";
}
function updateTimer() {
  const time = new Date(Date.now() - startTime);
  timeMinutes = time.getMinutes();
  timeSeconds = time.getSeconds();
  timeMilliseconds = time.getMilliseconds();
  document.querySelector(".timer__minutes").innerHTML = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  document.querySelector(".timer__seconds").innerHTML = timeSeconds <10 ? "0" + timeSeconds : timeSeconds;
  const millisecondsHtml = (timeMilliseconds< 100 ? (timeMilliseconds<10? "00" + timeMilliseconds :"0" + timeMilliseconds) : timeMilliseconds);
  document.querySelector(".timer__milliseconds").innerHTML = millisecondsHtml;
  cancelId = requestAnimationFrame(updateTimer);
}
