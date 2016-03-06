import LoginModel from './signIn.model';

export default class SignInService {
  constructor($rootScope, Restangular, $q, LocalStorageService, _) {
    'ngInject';

    this.LoginModel = new LoginModel();
    this.Restangular = Restangular;
    this.$rootScope = $rootScope;
    this.$q = $q;
    this._ = _;
    this.LocalStorageService = LocalStorageService;
  }

  submitLogin(fields){
    let deferred = this.$q.defer();

    this.Restangular.all('/auth/email')
      .customPOST(fields)
      .then(result => {
        this.LocalStorageService.setObject('user', result);
        this.LoginModel.setLoginData(result.plain());
        this.$rootScope.headers['Authorization'] = this.LoginModel.auth.token;
        deferred.resolve(result.data);
      }, result => deferred.reject(result.data));

    return deferred.promise;
  }

  getProfile() {
    let deferred = this.$q.defer();

    if(this.LoginModel.auth.token){
      deferred.resolve(this.LoginModel);
    } else if(this.LocalStorageService.get('user')){
      deferred.resolve(this.LocalStorageService.getObject('user'));
    } else {
      deferred.resolve(this.LoginModel);
    }

    return deferred.promise;
  }
}
