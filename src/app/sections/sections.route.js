export default function routerConfig ($stateProvider) {
  'ngInject';

  var UserNotLoggedIn = function (user, params, location) {
    if (!user.auth.token) {
      return {to: 'authentication.signIn', params: {redirect: decodeURIComponent(location)}};
    }
  };

  $stateProvider
    .state('sections', {
      abstract: true,
      templateUrl: 'app/sections/sections.html',
      'data': {
        rule: UserNotLoggedIn
      }
    });
}
