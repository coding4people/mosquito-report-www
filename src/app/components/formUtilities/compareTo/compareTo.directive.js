export default function CompareToDirective() {
  'ngInject';

  let directive = {
    require: 'ngModel',
    scope: {
      modelToCompare: '=vmCompareTo'
    },
    link: function(scope, element, attributes, ngModel) {
      ngModel.$validators.compareTo = function(modelValue) {
        return modelValue === scope.modelToCompare;
      };

      scope.$watch('modelToCompare', function() {
        ngModel.$validate();
      });
    }
  };

  return directive;
}
