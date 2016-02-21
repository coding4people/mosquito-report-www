import signIn from 'signIn/login.module';
import forgot from './forgotPassword/forgotPassword.module';
import reset from './resetPassword/resetPassword.module';
import routeConfig from './authentication.route';

export default angular.module('mosquito.sections.authentication', [
    login.name,
    forgot.name,
    reset.name,
    activateAccount.name
  ])
  .config(routeConfig);
