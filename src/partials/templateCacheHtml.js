import getTLD from '../app/config/app.getTLD';
import config from '../../config';

let $window = window; // eslint-disable-line

let templates = {};

/* TEMPLATES */

let callback = () => {
  angular.bootstrap(window.document, ["mosquito"]);
  callback = () => {};
}

let locale = (config.languages[getTLD($window)] || config.languages.default).locale;

let localeJs = document.createElement('script');
localeJs.type = 'text/javascript';
localeJs.src = '/partials/' + (templates[locale] || templates['en_us']);
localeJs.onreadystatechange = callback;
localeJs.onload = callback;

let body = window.document.getElementsByTagName("body")[0];
body.appendChild(localeJs);
