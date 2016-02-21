import signIn from './signIn/signIn.module';
import signUp from './signup/signUp.module';
import resetPassword from './resetPassword/resetPassword.module';
import routeConfig from './authentication.route';

export default angular.module('mosquito.sections.authentication', [
    signIn.name,
    signUp.name,
    resetPassword.name
  ])
  .config(routeConfig);
