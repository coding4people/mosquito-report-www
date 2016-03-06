describe('MainController', function() {
  var controller;
  var $scope;
  var $q;
  var Messages;

  beforeEach(module('mosquito'));

  beforeEach(inject(function($controller, _$rootScope_, _$q_, _Messages_) {
    controller = $controller('SignInController');
    $scope = _$rootScope_.$new();
    $q = _$q_;
    Messages = _Messages_;
  }));

  describe('submit()', function() {
    var SignInService;
    var deferredSubmitLogin;
    var toastr;

    beforeEach(inject(function (_SignInService_, _toastr_) {
      SignInService = _SignInService_;
      deferredSubmitLogin = $q.defer();
      toastr = _toastr_;

      spyOn(SignInService, 'submitLogin').and.returnValue(deferredSubmitLogin.promise);
      spyOn(controller, 'redirect');
      spyOn(toastr, 'error');
    }));

    it('should be defined', function() {
      expect(controller.submit).toBeDefined();
    });

    it('if form is valid should call submitLogin from SignInService', function () {
      controller.submit(true);
      expect(controller.isLoading).toBeTruthy();
      expect(SignInService.submitLogin).toHaveBeenCalledWith(controller.fields);
      deferredSubmitLogin.resolve();
      $scope.$digest();
      expect(controller.redirect).toHaveBeenCalled();
      expect(controller.isLoading).toBeFalsy();
    });

    it('if form is invalid should call toastr.error', function () {
      controller.submit(false);
      expect(controller.isLoading).toBeFalsy();
      expect(SignInService.submitLogin).not.toHaveBeenCalledWith(controller.fields);
    });

    it('if credentials was invalid should reject promise and then call toastr.error', function () {
      controller.submit(true);
      expect(controller.isLoading).toBeTruthy();
      expect(SignInService.submitLogin).toHaveBeenCalledWith(controller.fields);
      deferredSubmitLogin.reject();
      $scope.$digest();
      expect(controller.redirect).not.toHaveBeenCalled();
      expect(controller.isLoading).toBeFalsy();
      expect(toastr.error).toHaveBeenCalledWith(Messages.toastr.error._INVALID_CREDENTIALS_ERROR_);
    });
  });

  describe('redirect()', function () {
    var location;
    var $state;

    beforeEach(inject(function (_$location_, _$state_) {
      $location = _$location_;
      $state = _$state_;

      spyOn($state, 'go');
    }));

    it('redirect method should be defined', function () {
      expect(controller.redirect).toBeDefined();
    });

    it('if controller.redirectTo attr is defined should be replaced location url', function () {
      controller.redirectTo = '%252Ffoo'; // = /notifications
      controller.redirect();
      expect($location.$$url).toEqual(jasmine.any(String));
      expect($location.$$url).toBe('/%252Ffoo');
    });

    it('if controller.redirecTo attr is undefined should be redirect to section default state', function () {
      controller.redirectTo = null;
      controller.redirect();
      $scope.$digest();
      expect($state.go).toHaveBeenCalledWith('sections.map');
    });
  });
});
