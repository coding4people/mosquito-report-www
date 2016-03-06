describe('SignUpService', function() {
  var SignUpService;
  var Restangular;
  var $http;
  var signUpHttpHandler;
  var url;
  var $q;
  var deferred;

  beforeEach(module('mosquito'));

  beforeEach(inject(function(_Config_, _$rootScope_, _SignUpService_, _Restangular_, _$httpBackend_, _$q_) {
    url = _Config_.api.baseUrl + '/signup/email';
    SignUpService = _SignUpService_;
    Restangular = _Restangular_;
    $http = _$httpBackend_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    deferred = $q.defer();

    signUpHttpHandler = $http.when('POST', url).respond(200);
  }));

  describe('submitSignUp()', function() {
    it('should to be defined', function() {
      expect(SignUpService.submitSignUp).toBeDefined();
    });

    it('should return 200', function () {
      SignUpService.submitSignUp({});
      $http.expectPOST(url);
      $http.flush();
    });

    it('should return 401', function () {
      signUpHttpHandler.respond(401, 'some error');
      SignUpService.submitSignUp({});
      $http.expectPOST(url);
      $http.flush();
    });
  });
});
