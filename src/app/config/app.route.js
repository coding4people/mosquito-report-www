export default function routerConfig ($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/main');
}
