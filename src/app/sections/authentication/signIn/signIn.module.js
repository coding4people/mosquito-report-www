import controller from './signIn.controller';
import service from './signIn.service';
import routeConfig from './signIn.route';

export default angular.module('mosquito.sections.authentication.signIn', [])
  .config(routeConfig)
  .service('SignInService', service)
  .controller('SignInController', controller);
