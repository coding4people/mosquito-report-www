export default class SignInModel {
  constructor() {
    this.token = null;
  }

  setLoginData(data) {
    this.token = data.token;
  }
}
