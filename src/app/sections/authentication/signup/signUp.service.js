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
      .then(result => {
        deferred.resolve(result.data);
      }, result => deferred.reject(result.data));

    return deferred.promise;
  }
}
