const meetingTimes = (times) => {
  // let canMeet = true;
  // let meetingTimes = new Set();
  // for (i = 0; i < times.length; i++) {
  //   let meetingStart=times[i][0];
  //   let meetingEnd = times[i][1];
  //   while(meetingStart<=meetingEnd)
  //   {
  //     if(meetingTimes.has(meetingStart)){
  //       return false;
  //     }
  //     meetingTimes.add(meetingStart);
  //     meetingStart++;
  //   }
  // }
  // console.log(meetingTimes);

  // return canMeet;
  times.sort(function (a, b) {
    return a - b;
  });
  for(i=1;i<times.length;i++){
    meetingStart=times[i][0];
    meetingEnd = times[i-1][1];
    if(meetingStart < meetingEnd){
      return false;
    }
  }
  console.log(times);
  return true;
};

console.log(
  meetingTimes([
    [10, 15],
    [20, 25],
  ])
);
