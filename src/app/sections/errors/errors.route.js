export default function routerErrorsConfig ($stateProvider, CurrentLocaleProvider, $urlRouterProvider) {
  'ngInject';

  let lang = CurrentLocaleProvider.currentLocale.locale;

  $urlRouterProvider.when('', '/');
  $urlRouterProvider.when('/', ($q, $state, SignInService) => {
    let deferred = $q.defer();

    SignInService.getSession().then(user => {
      if(user.auth.token) {
        deferred.resolve($state.go('sections.map'));
      } else {
        deferred.resolve($state.go('authentication.signIn'));
      }
    });

    return deferred.promise;
  });

  $urlRouterProvider.otherwise(function($injector) {
    var $state = $injector.get('$state');

    $state.go('error.404', null, {
      location: false
    });
  });

  $stateProvider
    .state('error', {
      abstract: true,
      views: {
        '@': {
          templateUrl: 'app/sections/errors/error.html'
        }
      }
    })
    .state('error.404', {
      views: {
        'error-section': {
          templateUrl: `app/sections/errors/error.404.${lang}.html`
        }
      }
    });
}
