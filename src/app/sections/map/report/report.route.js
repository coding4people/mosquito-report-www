export default function routerConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('sections.map.report', {
      url: '/report',
      views: {
        '@sections': {
          templateUrl: `app/sections/map/report/report.${lang}.html`,
          controller: 'ReportController',
          controllerAs: 'reportController'
        }
      }
    });
}
