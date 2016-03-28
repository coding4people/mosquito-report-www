export default class UserHeaderControllerController {
  constructor(SignInService, UserProfileService, $state, Messages, toastr) {
    'ngInject';

    this.SignInService = SignInService;
    this.UserProfileService = UserProfileService;
    this.$state = $state;
    this.Messages = Messages;
    this.toastr = toastr;

    this.SignInService.getSession()
      .then(user => {
        this.isLogged = !!user.token;

        if(this.isLogged) {
          this.UserProfileService.getProfile().then(profile => this.userProfile);
        }
      });
  }

  logout() {
    this.SignInService.submitLogout()
      .then(() => {
        this.$state.go('authentication.signIn');
        this.toastr.success('Goodbye!');
      }, () => {
        this.toastr.error('Something is not right!');
      });
  }
}
