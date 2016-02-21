export default function routerConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('sections.main', {
      url: '/main',
      views: {
        '@sections': {
          templateUrl: `app/sections/main/main.${lang}.html`,
          controller: 'MainController',
          controllerAs: 'mainController'
        }
      }
    });
}
