export const pl = (n: number) => {
  const lastDigit = n.toString().slice(-1);

  if (n > 8 && n < 21) return `${n}ty`;
  if (lastDigit === '1') return `${n}szy`;
  if (lastDigit === '2') return `${n}gi`;
  if (lastDigit === '3') return `${n}ci`;
  if (lastDigit === '7' || lastDigit === '8') return `${n}my`;
  return `${n}ty`;
};
