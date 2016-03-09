'use strict';

module.exports = {
  api: {
    baseUrl:'http://api.mosquito.report',
    dateFormat: 'YYYY-MM-DD H:mm:ss'
  },
  facebookToken: '139600776429194',
  gMapsToken: 'token',
  debug: 'true',
  environment: 'LOCAL',
  languages:{
    'default': {
      locale:'en_us',
      fbLocale:'en_US',
      ietf:'en-us',
      iso2:'us',
      currencyIso:'USD',
      language: 'en',
      momentLocale: 'en',
      shortTimeFormat: 'HH:mm',
      xUserAgent:'F-0.2.0',
      dateFormat: {
        date: 'DD/MM/YYYY',
        time: 'HH:mm',
        dateTime: 'DD/MM h:mm a'
      }
    }
  }
};
