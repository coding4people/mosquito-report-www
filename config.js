'use strict';

module.exports = {
  api: {
    baseUrl:'http://merchant-api.stg.vaniday.net.br',
    dateFormat: 'YYYY-MM-DD H:mm:ss'
  },
  notifications: {
    baseUrl: 'http://vaniday-notifications.stg.vaniday.net.br',
    wsUrl: 'ws://vaniday-notifications-ws.stg.vaniday.net.br?access_token='
  },
  pictureBaseUrl: 'http://thumbor.stg.vaniday.net.br/unsafe/#RES#/smart/photos.beauty.com.br/',
  gMapsToken: 'AIzaSyC8zvFZXibDcyjrbq4o6u8jk7o2cxNpqUo',
  facebookAppId: '356542861200660',
  debug: 'true',
  websocket: ('true' === "true"),
  gtm: 'GTM-NR4PQC',
  environment: 'LOCAL',
  newRelic: '7782089',
  assetsUrl: '',
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
        dateTime: 'DD/MM h:mm a',
        calendarColumnHeader: 'ddd D',
        calendarTitle: 'MMMM D',
        calendarDetails: 'dddd, DD MMMM YYYY'
      }
    },
    'ae':{
      locale:'en_ae',
      fbLocale:'en_AE',
      ietf:'en-ae',
      iso2:'ae',
      language: 'en',
      currencyIso:'AED',
      country: 'UAE',
      gtm: 'GTM-T6GW7X',
      countrySlug: 'uae',
      dateFormat: {
        date: 'DD/MM/YYYY',
        time: 'HH:mm',
        dateTime: 'DD/MM h:mm a',
        calendarColumnHeader: 'ddd D',
        calendarTitle: 'MMMM D',
        calendarDetails: 'dddd, MMMM DD, YYYY'
      }
    },
    'au':{
      locale:'en_au',
      fbLocale:'en_AU',
      ietf:'en-au',
      iso2:'au',
      language: 'en',
      currencyIso:'AUD',
      country: 'Australia',
      gtm: 'GTM-T6GW7X',
      countrySlug: 'australia'
    },
    'uk':{
      locale:'en_gb',
      fbLocale:'en_GB',
      ietf:'en-gb',
      iso2:'gb',
      currencyIso:'GBP',
      language: 'en',
      country: 'United Kingdom',
      gtm: 'GTM-T6GW7X',
      countrySlug: 'united-kingdom'
    },
    'ru':{
      locale:'ru_ru',
      fbLocale:'ru_RU',
      ietf:'ru-ru',
      iso2:'ru',
      language: 'ru',
      momentLocale: 'ru',
      currencyIso:'RUB',
      country: 'RUS',
      gtm: 'GTM-T6GW7X',
      countrySlug: 'rus'
    },
    'it':{
      locale:'it_it',
      fbLocale:'it_IT',
      ietf:'it-it',
      iso2:'it',
      language: 'it',
      momentLocale: 'it',
      currencyIso:'EUR',
      country: 'Italy',
      gtm: 'GTM-T6GW7X',
      countrySlug: 'italy'
    },
    'sg':{
      locale:'en_sg',
      fbLocale:'en_SG',
      ietf:'en-sg',
      iso2:'sg',
      language: 'en',
      currencyIso:'SGD',
      country: 'SGD',
      gtm: 'GTM-T6GW7X',
      countrySlug: 'sgd',
      dateFormat: {
        date: 'DD/MM/YYYY',
        time: 'HH:mm',
        dateTime: 'DD/MM h:mm a',
        calendarColumnHeader: 'ddd D',
        calendarTitle: 'MMMM D',
        calendarDetails: 'dddd, MMMM DD, YYYY'
      }
    },
    'br':{
      locale:'pt_br',
      fbLocale:'pt_BR',
      ietf:'pt-br',
      momentLocale: 'pt-br',
      iso2:'br',
      currencyIso:'BRL',
      language: 'pt',
      country: 'Brazil',
      countrySlug: 'brazil'
    }
  }
};
