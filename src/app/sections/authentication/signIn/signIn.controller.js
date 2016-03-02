export default class SignInController {
  constructor($scope, $rootScope, SignInService, toastr, $stateParams, $location, $state, Messages) {
    'ngInject';

    this.fields = {
      credentials: {
        email: null,
        rawPassword: null
      }
    };
    this.$scope = $scope;
    this.SignInService = SignInService;
    this.toastr = toastr;
    this.isLoading = false;
    this.redirectTo = $stateParams.redirect;
    this.$location = $location;
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.Messages = Messages;
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
