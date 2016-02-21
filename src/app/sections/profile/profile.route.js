export default function routerConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('sections.profile', {
      url: '/profile',
      views: {
        '@sections': {
          templateUrl: `app/sections/profile/profile.${lang}.html`,
          controller: 'ProfileController',
          controllerAs: 'profileController'
        }
      }
    });
}
