export default function ngBootboxConfig (CurrentLocaleProvider, $ngBootboxConfigProvider, MessagesProvider) {
  'ngInject';
  let lang = CurrentLocaleProvider.currentLocale.locale;
  let translations = MessagesProvider.$get();

  if(translations.bootbox) {
    $ngBootboxConfigProvider.addLocale(lang, { OK: translations.bootbox.ok, CANCEL: translations.bootbox.cancel, CONFIRM: translations.bootbox.confirm });
  }
}
