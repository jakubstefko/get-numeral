export const en = (n: number, isDashAdded: boolean) => {
  const lastDigit = n.toString().slice(-1);
  const core = `${n}${isDashAdded ? '-' : ''}`;

  if (lastDigit === '1') return `${core}st`;
  if (lastDigit === '2') return `${core}nd`;
  if (lastDigit === '3') return `${core}rd`;
  if (n % 10 === 0) return `${core}ieth`;
  return `${core}th`;
};
