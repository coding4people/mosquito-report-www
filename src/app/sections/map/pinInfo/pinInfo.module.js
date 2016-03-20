import directive from './pinInfo.directive';
import controller from './pinInfo.controller';

export default angular.module('mosquito.sections.map.pinInfo', [])
  .directive('msPinInfo', directive)
  .controller('PinInfoController', controller);
