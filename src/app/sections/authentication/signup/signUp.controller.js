export default class SignUpController {
  constructor(SignUpService, toastr, $state, Messages) {
    'ngInject';

    this.fields = {
      email: null,
      firstName: null,
      lastName: null,
      password: null
    };

    this.SignUpService = SignUpService;
    this.toastr = toastr;
    this.isLoading = false;
    this.$state = $state;
    this.Messages = Messages;
  }

  submit(isValid) {
    if(isValid) {
      this.isLoading = true;
      this.SignUpService.submitSignUp(this.fields)
        .then(() => {
          this.isLoading = false;
        }, () => {
          this.isLoading = false;
          this.toastr.error(this.Messages.toastr.error._SIGNUP_ERROR_);
        });
    }
  }
}
