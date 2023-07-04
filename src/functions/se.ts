import { Contexts } from '../types';

export const se = (n: number, context?: Contexts) => {
  if (context === Contexts.date) return n.toString();

  const lastDigit = n.toString().slice(-1);

  if (n === 11 || n === 12) return `${n}.e`;
  if (lastDigit === '1' || lastDigit === '2') return `${n}.a`;
  return `${n}.e`;
};
