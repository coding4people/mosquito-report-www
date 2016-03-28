export default class UserProfileService {
  constructor(Restangular, $q) {
    'ngInject';

    this.$q = $q;
    this.Restangular = Restangular;
  }

  getProfile() {
    let deferred = this.$q.defer();

    this.Restangular.one('/profile').get()
      .then(profile => deferred.resolve(profile.plain()), () => deferred.reject());

    return deferred.promise;
  }
}
