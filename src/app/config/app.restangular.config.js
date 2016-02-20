export default function restangularConfig (RestangularProvider, ConfigProvider) {
  'ngInject';

  let config = ConfigProvider.$get();

  RestangularProvider.setBaseUrl(config.api.baseUrl);
  RestangularProvider.setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK'});
  RestangularProvider.setDefaultHttpFields({timeout: 15000});
}
