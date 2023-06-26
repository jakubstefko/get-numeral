import { pl, en, de } from './functions';
import { SupportedLanguage } from './languages.d';

const getNumeral = (n: number, lng: string = SupportedLanguage.en, isDashAdded = false) => {
  if (!Number.isInteger(n) || !(lng in SupportedLanguage )) return n.toString();

  switch (lng) {
    case SupportedLanguage.pl: return pl(n, isDashAdded)
    case SupportedLanguage.de: return de(n, isDashAdded)
    default: return en(n, isDashAdded)
  }
}

export default getNumeral