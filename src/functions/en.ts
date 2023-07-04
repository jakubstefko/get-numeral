export const en = (n: number) => {
  const lastDigit = n.toString().slice(-1);

  if (lastDigit === '1') return `${n}st`;
  if (lastDigit === '2') return `${n}nd`;
  if (lastDigit === '3') return `${n}rd`;
  if (n % 10 === 0) return `${n}ieth`;
  return `${n}th`;
};
