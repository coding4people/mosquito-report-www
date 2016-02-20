export default function runBlock ($rootScope, $state, $stateParams, Config, CurrentLocale, $location, LocalStorageService, LoginService, Restangular, $log, $ngBootbox, AnalyticsDispatcher) {
  'ngInject';

  $rootScope.config = Config;
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  $ngBootbox.setLocale(CurrentLocale.locale);

  let user = LocalStorageService.getObject('user').auth;
  let salon = LocalStorageService.getObject('salon');

  $rootScope.headers = {
    'X-Token': user ? user.token : null,
    'X-Locale': CurrentLocale.ietf,
    'X-User-Agent': CurrentLocale.xUserAgent
  };

  if(user) {
    AnalyticsDispatcher.loginView('autoLogin', user.token);
  }

  if(salon) {
    AnalyticsDispatcher.salonSelectedView(salon.hash);
  }

  Restangular.setDefaultHeaders($rootScope.headers);

  let stateChangeStart = $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
    checkCurrentUser(event, toState, toParams);
  });

  let stateChangeError = $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    event.preventDefault();
    $log.warn(error);

    if(error.name === '_SALON_NOT_FOUND_' && !toState.name === '') {
      $state.go('sections', null, {notify: true, reload: true});
    } else {
      $state.go(`error.${error.type}`, null, {notify: true, reload: true});
    }
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
      $log.warn('Unknown error');
    }
  });

  function checkCurrentUser (event, toState, toParams) {
    if (!toState.data) {
      return true;
    }

    if (!angular.isFunction(toState.data.rule)) {
      return true;
    }

    LoginService.getProfile().then(res => {
      if(res.auth.token) {
        LoginService.selectDefaultSalon(res.user).then(salon => {
          $rootScope.defaultSalon = salon;
          redirect(res, event, toState, toParams, salon);
        });
      } else {
        redirect(res, event, toState, toParams);
      }
    });
  }

  function redirect (res, event, toState, toParams, salon) {
    let result = toState.data.rule(res, toParams, (salon ? salon : '') + $location.path());
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
