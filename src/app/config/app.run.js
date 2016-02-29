export default function runBlock ($rootScope, $state, $stateParams, Config, CurrentLocale, $location, $ngBootbox, Restangular) {
  'ngInject';

  $rootScope.config = Config;
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $rootScope.headers = {
    'Authorization': 'Token MTEwMWU0MzktY2M0Ni00MzQwLWFlNDQtYjM4MmYwOTAwZTc1'
  };

  Restangular.setDefaultHeaders($rootScope.headers);

  $ngBootbox.setLocale(CurrentLocale.locale);
}
