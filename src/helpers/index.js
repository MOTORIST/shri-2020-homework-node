/* eslint-disable implicit-arrow-linebreak */
const pick = (obj, keys) =>
  Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));

const pickFromArray = (arr, keys) => arr.map(data => pick(data, keys));

module.exports = {
  pick,
  pickFromArray,
};
