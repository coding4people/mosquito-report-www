export default function routerConfig ($stateProvider) {
  'ngInject';

  var UserNotLoggedIn = function (user, params, location) {
    if (!user.auth.token) {
      return {to: 'authentication.login', params: {redirect: decodeURIComponent(location)}};
    }
  };

  let AppointmentsResolver = function ($q, AppointmentBufferService) {
    'ngInject';

    return AppointmentBufferService.initBuffer(true);
  };

  let SalonResolver = function ($stateParams, SalonService) {
    'ngInject';

    return SalonService.getSalonBySlug($stateParams.salon);
  };

  $stateProvider
    .state('sections', {
      url: '/:salon',
      reloadOnSearch: true,
      abstract: true,
      resolve: {
        SalonResolver: SalonResolver,
        AppointmentsResolver: AppointmentsResolver
      },
      templateUrl: 'app/sections/sections.html',
      'data': {
        rule: UserNotLoggedIn,
        data: {pageTitle: ''}
      }
    });
}
