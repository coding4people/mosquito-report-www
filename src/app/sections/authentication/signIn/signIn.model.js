export default class SignInModel {
  constructor() {
    this.auth = {};
    this.user = {};
  }

  setLoginData(data) {
    this.auth = data.auth;
    this.user = data.user;
  }
}
