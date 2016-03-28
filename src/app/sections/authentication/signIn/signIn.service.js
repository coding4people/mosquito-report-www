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
        this.$rootScope.headers['Authorization'] = `Token ${this.LoginModel.token}`;
        this.Restangular.setDefaultHeaders(this.$rootScope.headers);
        deferred.resolve(result.data);
      }, result => deferred.reject(result.data));

    return deferred.promise;
  }

  getSession() {
    let deferred = this.$q.defer();

    if(this.LoginModel.token){
      deferred.resolve(this.LoginModel);
    } else if(this.LocalStorageService.get('user')){
      deferred.resolve(this.LocalStorageService.getObject('user'));
    } else {
      deferred.resolve(this.LoginModel);
    }

    return deferred.promise;
  }

  submitLogout() {
    let deferred = this.$q.defer();

    this.LocalStorageService.remove('user');

    this.getSession().then(user => {
      if(!user.token) {
        deferred.resolve();
      } else {
        deferred.reject();
      }
    });

    return deferred.promise;
  }
}
