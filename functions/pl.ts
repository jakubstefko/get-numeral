export const pl = (n: number, isDashAdded: boolean) => {
  const lastDigit = n.toString().slice(-1);
  const middleChar = isDashAdded ? "-" : ""

  if (lastDigit === "1") return `${n}${middleChar}szy`;
  if (lastDigit === "2") return `${n}${middleChar}gi`;
  if (lastDigit === "3") return `${n}${middleChar}ci`;
  if (lastDigit === "7" || lastDigit === "8") return `${n}${middleChar}my`;
  return `${n}${middleChar}ty`;
};