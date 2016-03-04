export default class SignInController {
  constructor(SignInService, toastr, $stateParams, $location, $state, Messages) {
    'ngInject';

    this.fields = {
      email: null,
      password: null
    };

    this.SignInService = SignInService;
    this.toastr = toastr;
    this.isLoading = false;
    this.redirectTo = $stateParams.redirect;
    this.$location = $location;
    this.$state = $state;
    this.Messages = Messages;
  }

  submit(isValid) {
    if(isValid) {
      this.isLoading = true;
      this.SignInService.submitLogin(this.fields)
        .then(() => {
          this.redirect();
          this.isLoading = false;
        }, () => {
          this.isLoading = false;
          this.toastr.error(this.Messages.toastr.error._INVALID_CREDENTIALS_ERROR_);
        });
    }
  }

  redirect() {
    if(this.redirectTo){
      this.$location.path(decodeURIComponent(this.redirectTo)).search({});
      this.$location.replace();
    }else{
      this.$state.go('sections.map');
    }
  }
}
