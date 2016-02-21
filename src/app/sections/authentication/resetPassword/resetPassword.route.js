export default function routerResetPasswordConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('authentication.reset', {
      url: '/reset-password?token=',
      views: {
        'authentication-section': {
          templateUrl: `app/sections/authentication/resetPassword/resetPassword.${lang}.html`,
          controller: 'ResetPasswordController',
          controllerAs: 'resetPasswordController'
        }
      }
    });
}
