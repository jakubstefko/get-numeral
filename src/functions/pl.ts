export const pl = (n: number, isDashAdded: boolean) => {
  const lastDigit = n.toString().slice(-1);
  const core = `${n}${isDashAdded ? '-' : ''}`;

  if (n > 8 && n < 21) return `${core}ty`;
  if (lastDigit === '1') return `${core}szy`;
  if (lastDigit === '2') return `${core}gi`;
  if (lastDigit === '3') return `${core}ci`;
  if (lastDigit === '7' || lastDigit === '8') return `${core}my`;
  return `${core}ty`;
};
