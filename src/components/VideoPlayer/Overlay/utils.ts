const formatTwoDigits = (num: number) => {
  return num >= 10 ? num.toString() : `0${num}`;
};

export const formatTime = (time: number) => {
  const intTime = Math.floor(time);
  const mm = parseInt((intTime / 60).toString());
  const ss = intTime % 60;
  return [mm, formatTwoDigits(ss)];
};
