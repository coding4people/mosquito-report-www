describe('SignInService', function() {
  var SignInService;
  var Restangular;
  var $http;
  var loginHttpHandler;
  var url;
  var $q;
  var LocalStorageService;
  var deferred;
  var $rootScope;
  var userLocalStorage = {
    auth: {
      token: 'some token'
    },
    user: {
      email: 'someEmail'
    }
  };

  beforeEach(module('mosquito'));

  beforeEach(inject(function(_Config_, _$rootScope_, _SignInService_, _Restangular_, _$httpBackend_, _$q_, _LocalStorageService_, _) {
    url = _Config_.api.baseUrl + '/auth/email';
    SignInService = _SignInService_;
    Restangular = _Restangular_;
    $http = _$httpBackend_;
    LocalStorageService = _LocalStorageService_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    deferred = $q.defer();

    $rootScope.headers = { 'Authorization': null };

    LocalStorageService.setObject('user', userLocalStorage);

    spyOn(LocalStorageService, 'setObject').and.callThrough();

    loginHttpHandler = $http.when('POST', url).respond(userLocalStorage);
  }));

  describe('submitLogin()', function() {
    it('should to be defined', function() {
      expect(SignInService.submitLogin).toBeDefined();
    });

    it('should return 200', function () {
      SignInService.submitLogin({});
      $http.expectPOST(url);
      $http.flush();
      expect(LocalStorageService.setObject).toHaveBeenCalled();
      expect($rootScope.headers['Authorization']).toBe(userLocalStorage.auth.token);
    });

    it('should return 401', function () {
      loginHttpHandler.respond(401, 'some error');
      SignInService.submitLogin({});
      $http.expectPOST(url);
      $http.flush();
    });
  });

  describe('getSession()', function () {
    afterEach(function () {
      LocalStorageService.remove('user');
    });

    it('should be defined', function () {
      expect(SignInService.getSession).toBeDefined();
    });

    it('if LoginModel.auth has been populated resolve the promise with it', function () {
      SignInService.LoginModel.auth = {token: 'some token'};
      spyOn(SignInService, 'getSession').and.returnValue(deferred.promise);
      SignInService.getSession();
      deferred.resolve(SignInService.LoginModel);
      expect(SignInService.LoginModel).toBeDefined();
    });

    it('if LoginModel.auth hasn\'t been populated resolve the promise with localStorage', function () {
      LocalStorageService.setObject('user', {auth:{token: 'some token'}});
      spyOn(SignInService, 'getSession').and.returnValue(deferred.promise);
      SignInService.getSession();
      deferred.resolve(SignInService.LoginModel);
      expect(LocalStorageService.getObject('user')).toBeDefined();
      LocalStorageService.remove('user');
    });

    it('if LoginModel.auth and LocalStorage doesn\'t return anything should be resolve promise with nullable attr', function () {
      spyOn(SignInService, 'getSession').and.returnValue(deferred.promise);
      SignInService.getSession();
      deferred.resolve(SignInService.LoginModel);
      expect(SignInService.LoginModel.auth.token).not.toBeDefined();
    });
  });
});
