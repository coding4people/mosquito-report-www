export default function routerConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('authentication.signUp', {
      url: '/sign-up',
      views: {
        'authentication-section': {
          templateUrl: `app/sections/authentication/signUp/signUp.${lang}.html`,
          controller: 'SignUpController',
          controllerAs: 'signupController'
        }
      }
    });
}
