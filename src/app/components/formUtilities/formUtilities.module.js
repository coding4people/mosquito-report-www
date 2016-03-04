import formGroupErrorDirective from './formGroupError/formGroupError.directive';
import compareToDirective from './compareTo/compareTo.directive';

export default angular.module('mosquito.components.formUtilities', ['ngMessages'])
  .directive('msFormGroupError', formGroupErrorDirective)
  .directive('msCompareTo', compareToDirective);
