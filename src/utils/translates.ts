export const getValueByPath = (obj: any, path: string) => {
  const keys = path.split('.');
  let value = obj;

  for (const key of keys) {
    if (value && typeof value === 'object') {
      value = value[key];
    } else {
      value = undefined;
      break;
    }
  }

  return value;
};

export const isObjectEmpty = (obj: object): boolean => {
  return Object.keys(obj).length === 0;
};
