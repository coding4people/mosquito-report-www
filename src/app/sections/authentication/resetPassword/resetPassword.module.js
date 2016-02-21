import controller from './resetPassword.controller';
import routeConfig from './resetPassword.route';

export default angular.module('mosquito.sections.authentication.resetPassword', [])
  .config(routeConfig)
  .controller('ResetPasswordController', controller);
