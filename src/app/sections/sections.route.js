export default function routerConfig ($stateProvider) {
  'ngInject';

  $stateProvider
    .state('sections', {
      abstract: true,
      templateUrl: 'app/sections/sections.html'
    });
}
