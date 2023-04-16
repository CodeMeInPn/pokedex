export const capitalize = (string: string) => {
  const firstLetterUppercase = string.slice(0, 1).toLocaleUpperCase();
  const restOfString = string.slice(1, string.length);
  return `${firstLetterUppercase}${restOfString}`;
};
