export const getIdNumber = (num: number) => {
  if (num < 10) {
    return `#00${num}`;
  } else if (num >= 10 && num < 100) {
    return `#0${num}`;
  } else {
    return `#${num}`;
  }
};
