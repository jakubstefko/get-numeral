export const de = (n: number, isDashAdded: boolean) => {
  const core = `${n}${isDashAdded ? '-' : ''}`;

  if (n === 3) return `${core}tte`;
  if (n !== 1 && n < 20) return `${core}te`;
  return `${core}ste`;
};
