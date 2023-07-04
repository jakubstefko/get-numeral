export const de = (n: number) => {
  if (n === 3) return `${n}tte`;
  if (n !== 1 && n < 20) return `${n}te`;
  return `${n}ste`;
};
