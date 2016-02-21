export default function routerAuthenticationConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('authentication', {
      abstract: true,
      views: {
        '@': {
          templateUrl: `app/sections/authentication/authentication.${lang}.html`
        }
      }
    });
}
