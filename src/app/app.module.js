import config from './config/config.module';
import sections from './sections/sections.module';
import components from './components/components.module';

angular.module('mosquito', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngFx',
  'ngMessages',
  'restangular',
  'ui.router',
  'toastr',
  'angularModalService',
  'angularSpinner',
  'ngBootbox',
  'ngMap',
  config.name,
  components.name,
  sections.name
]);
