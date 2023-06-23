import { pl, en } from './functions';
import { SupportedLanguage } from './languages';

const getNumeral = (n: number, lng: string = SupportedLanguage.en, isDashAdded = false) => {
  if (!Number.isInteger(n) || !(lng in SupportedLanguage )) return n.toString();

  switch (lng) {
    case SupportedLanguage.pl: return pl(n, isDashAdded)
    default: return en(n, isDashAdded)
  }
}

export default getNumeral