const meetingTimes = (times) => {
  const sortedTimes = times.sort((a, b) => a[0] - b[0]);
  console.log(sortedTimes);
  for (let i = 0; i < sortedTimes.length - 1; i++) {
    if (sortedTimes[i][1] > sortedTimes[i+1][0]) {
      return false;
    }
  }
  return true;
};
console.log(
  meetingTimes([
    [10, 15],
    [14, 25],
  ])
);
