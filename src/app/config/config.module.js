/* global moment:false, _:false, $:false */

import ConfigProvider from './app.config.provider';
import CurrentLocaleProvider from './app.currentLocale.provider';
import MessagesProvider from './app.messages.provider';
import restangularConfig from './app.restangular.config';
import pikadayConfig from './app.pikaday.config';
import spinnerConfig from './app.spinner.config';
import routerConfig from './app.route';
import runBlock from './app.run';
import ngBootboxConfig from './app.ngBootbox.config';
import momentLocaleConfig from './app.moment.config';
import scrollbarConfig from './app.scrollbar.config';
import analyticsConfig from './app.analytics.config';

export default angular.module('vanidayMerchant.config', [])
  .constant('_', _)
  .provider('Config', ConfigProvider)
  .provider('CurrentLocale', CurrentLocaleProvider)
  .provider('Messages', MessagesProvider)
  .constant('moment', moment)
  .constant('$', $)
  .config(momentLocaleConfig)
  .config(routerConfig)
  .config(restangularConfig)
  .config(pikadayConfig)
  .config(spinnerConfig)
  .config(ngBootboxConfig)
  .config(scrollbarConfig)
  .config(analyticsConfig)
  .run(runBlock);

