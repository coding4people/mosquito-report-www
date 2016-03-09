export default function ConnectWithFacebookDirective(CurrentLocale) {
  'ngInject';

  let lang = CurrentLocale.locale;

  let directive = {
    templateUrl: `app/components/connectWithFacebook/connectWithFacebook.${lang}.html`,
    controller: 'ConnectWithFacebookController',
    controllerAs: 'connectWithFacebookController'
  };

  return directive;
}
