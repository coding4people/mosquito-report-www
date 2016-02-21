import controller from './signIn.controller';
import routeConfig from './signIn.route';

export default angular.module('mosquito.sections.authentication.signIn', [])
  .config(routeConfig)
  .controller('SignInController', controller);
