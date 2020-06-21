const languageDetectorOptions = {
  // order and from where user language should be detected
  order: ['localStorage'],
  lookupLocalStorage: 'lng',

  // cache user language on
  caches: ['localStorage'],

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

export default languageDetectorOptions;
