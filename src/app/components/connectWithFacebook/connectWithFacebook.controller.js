export default class ConnectWithFacebookController {
  constructor(ConnectWithFacebookService, toastr, $location, $state, $stateParams, Messages) {
    'ngInject';

    this.ConnectWithFacebookService = ConnectWithFacebookService;
    this.toastr = toastr;
    this.isLoading = false;
    this.redirectTo = $stateParams.redirect;
    this.$location = $location;
    this.$state = $state;
    this.Messages = Messages;
  }

  requestLogin() {
    this.ConnectWithFacebookService.login()
      .then(() => this.redirect(), () => this.toastr.error(this.Messages.toastr.error._FACEBOOK_SIGNIN_ERROR_));
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
