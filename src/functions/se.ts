export const se = (n: number, isDashAdded: boolean) => {
  const lastDigit = n.toString().slice(-1);
  const core = `${n}${isDashAdded ? "-" : ""}`

  if (n === 11 || n === 12) return `${core}.e`
  if ((lastDigit === "1" || lastDigit === "2")) return `${core}.a`;
  return `${core}.e`;
};