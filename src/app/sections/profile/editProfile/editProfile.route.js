export default function routerConfig ($stateProvider, CurrentLocaleProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $stateProvider
    .state('sections.profile.editProfile', {
      url: '/edit-profile',
      views: {
        '@sections': {
          templateUrl: `app/sections/profile/editProfile/editProfile.${lang}.html`,
          controller: 'EditProfileController',
          controllerAs: 'editProfileController'
        }
      }
    });
}
