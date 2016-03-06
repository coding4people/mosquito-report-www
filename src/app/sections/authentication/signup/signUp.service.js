export default class SignUpService {
  constructor(Restangular, $q) {
    'ngInject';

    this.Restangular = Restangular;
    this.$q = $q;
  }

  submitSignUp(fields){
    let deferred = this.$q.defer();

    this.Restangular.all('/signup/email')
      .customPOST(fields)
      .then(() => {
        deferred.resolve();
      }, error => deferred.reject(error));

    return deferred.promise;
  }
}
