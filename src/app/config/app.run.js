export default function runBlock ($rootScope, $state, $stateParams, Config, CurrentLocale, $location, $ngBootbox) {
  'ngInject';

  $rootScope.config = Config;
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $ngBootbox.setLocale(CurrentLocale.locale);
}
