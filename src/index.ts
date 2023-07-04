import { pl, en, de, se } from './functions';
import { Contexts, SupportedLanguages } from './types';

const getNumeral = (
  n: number,
  lng: string = SupportedLanguages.en,
  context?: Contexts
) => {
  if (!Number.isInteger(n) || !(lng in SupportedLanguages)) return n.toString();

  switch (lng) {
    case SupportedLanguages.pl:
      return pl(n);
    case SupportedLanguages.de:
      return de(n);
    case SupportedLanguages.se:
      return se(n, context);
    case SupportedLanguages.da:
      return `${n}.`;
    case SupportedLanguages.no:
      return `${n}.`;
    default:
      return en(n);
  }
};

export default getNumeral;
