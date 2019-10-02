const find = (object, property) => {
  const elements = Array.isArray(property) ? property : property.split('.');
  const name = elements[0];
  const value = object[name];

  if (elements.length <= 1) {
    return value;
  }

  if (value === null || typeof value !== 'object') {
    return undefined;
  }

  return find(value, elements.slice(1));
};

export default class Loader {
  constructor(data) {
    this.data = data;
  }

  get(property) {
    const value = find(this.data, property);

    if (value === undefined) {
      throw new Error(`[${property}] was not found in loaded data!`);
    }

    return value;
  }
}
