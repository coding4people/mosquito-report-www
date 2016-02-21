export default function routerConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('authentication.signIn', {
      url: '/sign-in',
      views: {
        'authentication-section': {
          templateUrl: `app/sections/authentication/signIn/signIn.${lang}.html`,
          controller: 'SignInController',
          controllerAs: 'signinController'
        }
      }
    });
}
