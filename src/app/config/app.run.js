export default function runBlock ($rootScope, $state, $stateParams, Config, CurrentLocale, $location, $ngBootbox, Restangular, LocalStorageService, SignInService, $log) {
  'ngInject';

  $rootScope.config = Config;
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  let user = LocalStorageService.getObject('user');

  $rootScope.headers = {
    'Authorization': `Token ${user.token}`
  };

  Restangular.setDefaultHeaders($rootScope.headers);
  $ngBootbox.setLocale(CurrentLocale.locale);

  let stateChangeStart = $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
    checkCurrentUser(event, toState, toParams);
  });

  let stateChangeError = $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    event.preventDefault();
    $log.warn(error);
    $state.go(`error.${error.type}`, null, {notify: true, reload: true});
  });

  Restangular.setErrorInterceptor(response => {
    if (response.status === 401) {
      LocalStorageService.remove('user');
      return false;
    }

    try {
      if (response.status === 400) {
        $log.warn(`Oops, looks like something went wrong here.\n
                  Please try your request again later.\n\n
                  Error Code: ${response.data.type} / ${response.data.title}`);
      } else {
        $log.warn(`Response received with HTTP error code:
                    ${response.data.type} / ${response.data.title}`);
      }
    } catch (error) {
      $log.warn(`Unknown error ${error}`);
    }
  });

  function checkCurrentUser (event, toState, toParams) {
    if (!toState.data) {
      return true;
    }

    if (!angular.isFunction(toState.data.rule)) {
      return true;
    }

    SignInService.getSession().then(res => {
      redirect(res, event, toState, toParams);
    });
  }

  function redirect (res, event, toState, toParams) {
    let result = toState.data.rule(res, toParams, $location.path());
    if (result && result.to) {
      event.preventDefault();
      $state.go(result.to, result.params, {reload: true, notify: true});
    }
  }

  $rootScope.$on('$destroy', () => {
    stateChangeStart();
    stateChangeError();
  });
}
