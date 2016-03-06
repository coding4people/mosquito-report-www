import controller from './signUp.controller';
import service from './signUp.service';
import routeConfig from './signUp.route';

export default angular.module('mosquito.sections.authentication.signUp', [])
  .config(routeConfig)
  .service('SignUpService', service)
  .controller('SignUpController', controller);
