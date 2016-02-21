import controller from './signUp.controller';
import routeConfig from './signUp.route';

export default angular.module('mosquito.sections.authentication.signUp', [])
  .config(routeConfig)
  .controller('SignUpController', controller);
