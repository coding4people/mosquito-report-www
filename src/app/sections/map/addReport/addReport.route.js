export default function routerConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('sections.addReport', {
      url: '/add-report',
      views: {
        'section-header': {
          templateUrl: `app/components/headers/user/headerUserClose.${lang}.html`
        },
        '@sections': {
          templateUrl: `app/sections/map/addReport/addReport.${lang}.html`,
          controller: 'AddReportController',
          controllerAs: 'addReportController'
        }
      }
    });
}
