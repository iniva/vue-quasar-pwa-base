export const slugify = (str) => {
  let newStr = str
    .replace(/^\s+|\s+$/g, '') // trim
    .toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';

  for (let i = 0, l = from.length; i < l; i += 1) {
    newStr = newStr.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  newStr = newStr
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return newStr;
};

export const capitalize = (str) => {
  const newString = [];
  const parts = str.split(' ');

  for (let i = 0, l = parts.length; i < l; i += 1) {
    if (parts[i].trim().length) {
      newString.push(`${parts[i][0].toUpperCase()}${parts[i].slice(1)}`);
    }
  }

  return newString.join(' ');
};

export const camelize = string => String(string)
  .split(' ')
  .map(s => `${s.charAt(0).toUpperCase()}${s.substring(1)}`)
  .join(' ');

export const removeDiacritics = (str) => {
  let newStr = str.toLowerCase();

  // remove diacritics
  const from = 'àáäâèéëêìíïîòóöôùúüû';
  const to = 'aaaaeeeeiiiioooouuuun';

  for (let i = 0, l = from.length; i < l; i += 1) {
    newStr = newStr.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  return newStr;
};
