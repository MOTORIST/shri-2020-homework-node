type Obj = Record<string, string | number | boolean>;

export const pick = (obj: Obj, keys: string[]): Obj =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));

export const pickFromArray = (arr: Obj[], keys: string[]): Obj[] =>
  arr.map(data => pick(data, keys));
