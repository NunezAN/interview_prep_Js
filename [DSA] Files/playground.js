const meetingTimes = (times) => {
  times.sort(function (a, b) {
    return a[0] - b[0];
  });
  for (let i = 0; i < times.length - 1; i++) {
    console.log(times[i][1], times[i + 1][0]);
    if (times[i][1] > times[i + 1][0]) {
      return false;
    }
  }
  return true;
};
console.log(
  meetingTimes([[5, 10], [10, 15], [12, 25], [25, 30]])
);
