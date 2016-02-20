import getTLD from './app.getTLD';

export default class CurrentLocaleProvider {
  constructor(ConfigProvider, $windowProvider, _) {
    'ngInject';

    let config = ConfigProvider.$get();
    
    this.currentLocale = _.merge(config.languages.default, config.languages[getTLD($windowProvider.$get())]);
  }

  $get() {
    return this.currentLocale;
  }
}

