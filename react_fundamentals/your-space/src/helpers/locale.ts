const getDisplayLocale = ():string =>
    (new Intl.NumberFormat()).resolvedOptions().locale;

const getSystemLocale =():string => navigator.languages[0] || navigator.language;

export {getDisplayLocale, getSystemLocale}