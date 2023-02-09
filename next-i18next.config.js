const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en', 'ar', 'ru'],
  },
  localePath:
    path.resolve('./public/locales'),
}