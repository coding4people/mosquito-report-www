export default class LocalStorageService {
  constructor($window) {
    'ngInject';
    this.$window = $window;
    this.storage = {};
  }

  set(key, value) {
    try {
      this.$window.localStorage[key] = value;
    } catch (e) {
      this.storage[key] = value;
    }
  }

  remove(key) {
    try {
      this.$window.localStorage.removeItem(key);
    } catch (e) {
      this.storage[key] = null;
    }
  }

  get(key, defaultValue) {
    try {
      return this.$window.localStorage[key] || defaultValue;
    } catch (e) {
      return this.storage[key] || defaultValue;
    }
  }

  setObject(key, value) {
    try {
      this.$window.localStorage[key] = angular.toJson(value);
    } catch (e) {
      this.storage[key] = angular.toJson(value);
    }
  }

  clear() {
    try {
      this.$window.localStorage.clear();
    } catch (e) {
      this.storage = {};
    }
  }

  getObject(key) {
    try {
      return angular.fromJson(this.$window.localStorage[key] || '{}');
    } catch (e) {
      return angular.fromJson(this.storage[key] || '{}');
    }
  }
}
