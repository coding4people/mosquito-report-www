export default class ConnectWithFacebookService {
  constructor(Facebook, Restangular, $q) {
    'ngInject';

    this.Facebook = Facebook;
    this.Restangular = Restangular;
    this.$q = $q;
  }

  login() {
    let deferred = this.$q.defer();

    this.Facebook.login(response => {
      this.Restangular.one('/auth/facebook')
        .customPOST({token: response.authResponse.accessToken})
        .then(() => deferred.resolve(), () => deferred.reject());
    });

    return deferred.promise;
  }
}
