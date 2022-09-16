const millisecondHandle = document.querySelector(".handleMilliseconds");
const secondHandle = document.querySelector(".handleSeconds");
const minuteHandle = document.querySelector(".handleMinute");
const hourHandle = document.querySelector(".handleHour");
function main() {
  requestAnimationFrame(updateClock);
}

function updateClock() {
  const time = new Date(Date.now());
  timeHour = time.getHours();
  timeMinutes = time.getMinutes();
  timeSeconds = time.getSeconds();
  timeMilliseconds = time.getMilliseconds();

  const minutesScale = 6 / 60;
  const extraMinutesAngle = timeSeconds * minutesScale;
  const minutesAngle = timeMinutes * 6 + extraMinutesAngle;

  const HourScale = 360 / 12 / 60;
  const extaHoursAngle = timeMinutes * HourScale;
  const HoursAngle = timeHour * (360 / 12) + extaHoursAngle;

  millisecondHandle.style.transform = `translateX(-50%) rotate(${
    timeMilliseconds * (360 / 1000)
  }deg)`;
  secondHandle.style.transform = `translateX(-50%) rotate(${
    timeSeconds * (360 / 60)
  }deg)`;
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  hourHandle.style.transform = `translateX(-50%) rotate(${HoursAngle}deg)`;
  //   console.log(timeHour);

  requestAnimationFrame(updateClock);
}
main();
