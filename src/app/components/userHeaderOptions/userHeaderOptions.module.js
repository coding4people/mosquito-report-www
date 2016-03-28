import directive from './userHeaderOptions.directive';
import controller from './userHeaderOptions.controller';

export default angular.module('mosquito.components.userHeaderOptions', [])
  .directive('msUserHeaderOptions', directive)
  .controller('UserHeaderOptionsController', controller);
