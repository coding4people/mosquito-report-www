export default function routerConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('sections.main', {
      url: '/map',
      views: {
        '@sections': {
          templateUrl: `app/sections/map/map.${lang}.html`,
          controller: 'MapController',
          controllerAs: 'mapController'
        }
      }
    });
}
