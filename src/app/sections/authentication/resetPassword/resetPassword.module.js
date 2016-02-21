import controller from './resetPassword.controller';
import route from './resetPassword.route';

export default angular.module('mosquito.sections.authentication.resetPassword', [])
  .config(route)
  .controller('ResetPasswordController', controller);
