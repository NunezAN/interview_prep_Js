/** Meeting Times **
 *
 * Given an array of meeting times, determine if a person can
 * attend all meetings.
 *
 * @example
 * meetingTimes([[10, 15], [20, 25]]) -> true
 * meetingTimes([[5, 10], [10, 15], [12, 25], [25, 30]]) -> false
 * meetingTimes([[10, 20], [20, 30], [30, 40]]) -> true
 *
 */

const meetingTimes = (times) => {
  //   let canMeet = true;
  //   let meetingTimes = new Set();
  //   for (i = 0; i < times.length; i++) {
  //     let meetingStart = times[i][0];
  //     let meetingEnd = times[i][1];
  //     while (meetingStart <= meetingEnd) {
  //       if (meetingTimes.has(meetingStart)) {
  //         return false;
  //       }
  //       meetingTimes.add(meetingStart);
  //       meetingStart++;
  //     }
  //   }
  //   console.log(meetingTimes);

  //   return canMeet;
  // times.sort(function (a, b) {
  //     return a[0] - b[0];
  //   });
  //   for(i=1;i<times.length;i++){
  //     meetingStart=times[i][0];
  //     meetingEnd = times[i-1][1];
  //     if(meetingStart < meetingEnd){
  //       return false;
  //     }
  //   }
  //   console.log(times);
  //   return true;
  const sortedTimes = times.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < sortedTimes.length - 1; i++) {
    if (sortedTimes[i][1] > sortedTimes[i + 1][0]) {
      return false;
    }
  }
  return true;
};

module.exports = meetingTimes;
