export default function MomentLocaleProvider (CurrentLocaleProvider, moment) {
  'ngInject';

  moment.locale(CurrentLocaleProvider.$get().momentLocale);
}
