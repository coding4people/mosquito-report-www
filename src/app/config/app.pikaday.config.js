export default function pikadayConfig (CurrentLocaleProvider, pikadayConfigProvider, moment) {
  'ngInject';

  let momentLocaleData = moment.localeData();

  pikadayConfigProvider.setConfig({
    format: CurrentLocaleProvider.currentLocale.dateFormat.date,
    i18n: {
      months: momentLocaleData._months,
      weekdays: momentLocaleData._weekdays,
      weekdaysShort: momentLocaleData._weekdaysShort
    }
  });
}
