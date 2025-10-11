import ptBr from './pt-br.json';

type Translations = Record<string, string>;

type Params = Record<string, string | number>;

export const translation = (key: string, params: Params = {}): string => {
  const textSource = ptBr as Translations;
  let text = textSource[key] || key;

  for (const param in params) {
    const value = String(params[param]);
    text = text.replace(`{{${param}}}`, value);
  }

  return text;
};
