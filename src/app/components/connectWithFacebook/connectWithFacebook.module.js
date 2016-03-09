import directive from './connectWithFacebook.directive';
import controller from './connectWithFacebook.controller';
import service from './connectWithFacebook.service';

export default angular.module('mosquito.components.connectWithFacebook', [])
  .directive('msConnectWithFacebook', directive)
  .controller('ConnectWithFacebookController', controller)
  .service('ConnectWithFacebookService', service);
