export const en = (n: number, isDashAdded: boolean) => {
  const lastDigit = n.toString().slice(-1);
  const middleChar = isDashAdded ? "-" : ""

  if (lastDigit === "1") return `${n}${middleChar}st`;
  if (lastDigit === "2") return `${n}${middleChar}nd`;
  if (lastDigit === "3") return `${n}${middleChar}rd`;
  if (n % 10 === 0) return `${n}${middleChar}ieth`;
  return `${n}${middleChar}th`;
};