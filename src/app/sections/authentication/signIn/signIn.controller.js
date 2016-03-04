export default class SignInController {
  constructor(SignInService, toastr, $stateParams, $location, $state) {
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
  }

  submit(isValid) {
    if(isValid) {
      this.SignInService.submitLogin(this.fields);
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
