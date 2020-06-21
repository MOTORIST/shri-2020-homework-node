export type Lang = 'en' | 'ru';

const languages = {
  en: {
    seconds: 's',
    minutes: 'm',
    hours: 'h',
  },
  ru: {
    seconds: 'сек',
    minutes: 'мин',
    hours: 'ч',
  },
};

function render(ms: number, lang: Lang = 'en'): string {
  const renderArr = [];
  const sec = Math.floor((ms / 1000) % 60);
  const min = Math.floor((ms / (1000 * 60)) % 60);
  const h = Math.floor((ms / (1000 * 60 * 60)) % 24);

  if (h) renderArr.push(`${h}${languages[lang].hours}`);
  if (min) renderArr.push(`${min}${languages[lang].minutes}`);
  if (sec) renderArr.push(`${sec}${languages[lang].seconds}`);

  return renderArr.join(' ');
}

export default render;
