describe('FormGroupErrorDirective', function () {
  var element;
  var scope;
  var directiveTpl;
  var $log;
  var $compile;
  var $rootScope;

  beforeEach(inject(function(_$rootScope_,_$compile_, _$log_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $log= _$log_;

    spyOn($log, 'error');

    directiveTpl = '<div class="form-group" vm-form-group-error>' +
                     '<label for="password">Password</label>' +
                     '<input name="rawPassword"' +
                            'type="text"' +
                            'ng-model="fields.rawPassword"' +
                            'class="form-control"' +
                            'id="password"' +
                            'ng-required="true">' +
                   '</div>';
  }));

  describe('link() without form', function () {
    beforeEach(inject(function () {
      scope = $rootScope.$new();
      element = $compile(angular.element(directiveTpl)[0])(scope);
      scope.$digest();
    }));

    it('element should have isolated scope', function () {
      expect(element.isolateScope()).toBeDefined();
    });

    it('Given that form isn\'t defined should throw $log.error message', function () {
      expect($log.error).toHaveBeenCalled();
    });
  });

  describe('link() with form', function () {
    var elementWithFormTpl;
    var formGroupElement;
    var formGroupElementScope;

    beforeEach(inject(function () {
      scope = $rootScope.$new();
      elementWithFormTpl = '<form name="passwordForm" novalidate>' + directiveTpl + '<button type="submit"></button></button></form>';
      element = $compile(angular.element(elementWithFormTpl))(scope);
      scope.$digest();

      formGroupElement = element.find('.form-group');
      formGroupElementScope = formGroupElement.isolateScope();
    }));

    it('form to be defined and $dirty had to be falsy', function () {
      expect(scope.passwordForm).toBeDefined();
      expect(scope.passwordForm.$dirty).toEqual(false)
    });

    it('verify several attributes', function () {
      expect(formGroupElementScope.inputElement).toBeDefined();
      expect(formGroupElementScope.form).toBeDefined();
      expect(formGroupElementScope.inputTouched).toBeDefined();
      expect(formGroupElementScope.inputTouched).toBeFalsy();
      expect(formGroupElementScope.model).toBeDefined();
    });

    it('when form is submitted should trigger watcher and validate it, in this case $invalid is true', function () {
      element.find('button').click();
      scope.$digest();
      formGroupElementScope.$digest();
      expect(formGroupElementScope.hasError).toBeTruthy();
      expect(formGroupElementScope.inputTouched).toBeTruthy(); // It'll display ngMessages
      expect(formGroupElement.hasClass('has-error')).toBeTruthy();
    });

    it('when form is submitted should trigger watcher and validate it, in this case is $valid', function () {
      formGroupElementScope.model.$setViewValue('asd');
      formGroupElementScope.model.$render();
      scope.$digest();
      formGroupElementScope.$digest();
      expect(Object.keys(formGroupElementScope.hasError).length).toBe(0);
      expect(formGroupElementScope.inputTouched).toBeFalsy(); // It'll display ngMessages
      expect(formGroupElement.hasClass('has-error')).toBeFalsy();
    });
  });
});
