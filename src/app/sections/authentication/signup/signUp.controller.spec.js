describe('SignUpController', function() {
  var controller;
  var $scope;
  var $q;
  var Messages;

  beforeEach(module('mosquito'));

  beforeEach(inject(function($controller, _$rootScope_, _$q_, _Messages_) {
    controller = $controller('SignUpController');
    $scope = _$rootScope_.$new();
    $q = _$q_;
    Messages = _Messages_;
  }));

  describe('submit()', function() {
    var SignUpService;
    var deferredSubmitLogin;
    var toastr;

    beforeEach(inject(function (_SignUpService_, _toastr_) {
      SignUpService = _SignUpService_;
      deferredSubmitLogin = $q.defer();
      toastr = _toastr_;

      spyOn(SignUpService, 'submitSignUp').and.returnValue(deferredSubmitLogin.promise);
      spyOn(toastr, 'error');
    }));

    it('should be defined', function() {
      expect(controller.submit).toBeDefined();
    });

    it('if form is valid should call submitSignUp from SignUpService', function () {
      controller.submit(true);
      expect(controller.isLoading).toBeTruthy();
      expect(SignUpService.submitSignUp).toHaveBeenCalledWith(controller.fields);
      deferredSubmitLogin.resolve();
      $scope.$digest();
      expect(controller.isLoading).toBeFalsy();
    });

    it('if form is invalid should call toastr.error', function () {
      controller.submit(false);
      expect(controller.isLoading).toBeFalsy();
      expect(SignUpService.submitSignUp).not.toHaveBeenCalledWith(controller.fields);
    });

    it('if credentials was invalid should reject promise and then call toastr.error', function () {
      controller.submit(true);
      expect(controller.isLoading).toBeTruthy();
      expect(SignUpService.submitSignUp).toHaveBeenCalledWith(controller.fields);
      deferredSubmitLogin.reject();
      $scope.$digest();
      expect(controller.isLoading).toBeFalsy();
      expect(toastr.error).toHaveBeenCalledWith(Messages.toastr.error._SIGNUP_ERROR_);
    });
  });
});
