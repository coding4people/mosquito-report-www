export default function UserHeaderOptionsDirective(CurrentLocale) {
  'ngInject';

  let lang = CurrentLocale.locale;

  let directive = {
    templateUrl: `app/components/userHeaderOptions/userHeaderOptions.${lang}.html`,
    controller: 'UserHeaderOptionsController',
    controllerAs: 'userHeaderOptionsController',
    link: (scope, element) => {
      $(element).find('.dropdown-toggle').dropdown();
    }
  };

  return directive;
}
