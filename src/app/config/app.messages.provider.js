/* global require:false */
export default class MessageProvider {
  constructor(CurrentLocaleProvider) {
    'ngInject';

    this.CurrentLocaleProvider = CurrentLocaleProvider;
  }

  loadMessages (locale) {
    return require('json!yaml!../../locales/' + locale + '.yml').vaniday;
  }

  $get() {
    return this.loadMessages(this.CurrentLocaleProvider.$get().locale);
  }
}

