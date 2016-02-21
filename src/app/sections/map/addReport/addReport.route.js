export default function routerConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('sections.map.addReport', {
      url: '/add-report',
      views: {
        '@sections': {
          templateUrl: `app/sections/map/addReport/map.${lang}.html`,
          controller: 'AddReportController',
          controllerAs: 'addReportController'
        }
      }
    });
}
