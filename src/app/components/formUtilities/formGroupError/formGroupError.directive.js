export default function FormGroupErrorDirective(CurrentLocale, $log) {
  'ngInject';

  let lang = CurrentLocale.locale;

  let directive = {
    restrict: 'A',
    templateUrl: `app/components/formUtilities/formGroupError/formGroupError.${lang}.html`,
    transclude: true,
    require: '^?form',
    scope: {},
    link: (scope, element, attrs, form) => {
      if(form) {
        scope.inputElement = element.find('input')[0];
        scope.form = form;
        scope.inputTouched = scope.form[scope.inputElement.name].$touched;

        scope.model = scope.form[scope.inputElement.name];

        scope.$watch(() => {
          return scope.model.$viewValue || scope.model.$touched || scope.model.$dirty || scope.form.$submitted;
        }, () => {
          if(scope.model.$invalid && (scope.model.$touched || scope.model.$dirty || scope.form.$submitted)) {
            scope.model.$setTouched();
            scope.hasError = scope.model.$error;
            scope.inputTouched = scope.model.$touched;
            element.addClass('has-error');
          } else {
            element.removeClass('has-error');
            scope.hasError = scope.model.$error;
            scope.inputTouched = scope.model.$touched;
          }
        });
      } else {
        $log.error('You\'ll need to wrap form before to declare form-group-error directive');
      }
    }
  };

  return directive;
}
