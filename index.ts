import { pl, en } from './functions';
import { SupportedLanguage } from './languages';

const getNumeral = (n: number, lng: SupportedLanguage, isDashAdded = false) => {
  if (!Number.isInteger(n)) return n.toString();

  switch (lng) {
    case 'pl': return pl(n, isDashAdded)
    default: return en(n, isDashAdded)
  }
}

export default getNumeral