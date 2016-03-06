export default function routerConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('authentication.signUp', {
      url: '/sign-up',
      views: {
        'section-header': {
          templateUrl: `app/sections/authentication/signUp/signUpHeader.${lang}.html`
        },
        'authentication-section': {
          templateUrl: `app/sections/authentication/signUp/signUp.${lang}.html`,
          controller: 'SignUpController',
          controllerAs: 'signupController'
        }
      }
    });
}
